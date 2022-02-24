import { Injectable } from '@angular/core';
import { ConnectionService } from './connection/connection.service';
import { ERC20_ABI, ETHBOX, STAKING, TOKEN_DISPENSER } from '../data/abis';
import { BehaviorSubject } from 'rxjs';
import { AppBox, COMPLETE, ONE_WAY, OTC_TRADE, PENDING } from '../components/my-transactions/boxes/box';
import { TokenSelectorService } from '../components/modals/token-selector/token-selector.service';
import { ADDRESS_ZERO, MAX_VALUE, ZERO } from '../data/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { AddressbookService } from '../components/modals/addressbook/addressbook.service';
import { ToasterService } from '../components/toaster/toaster.service';
import { ConsoleService } from '../components/offcanvases/console/console.service';
import { LoadingService } from '../components/loading/loading.service';
import { ModalsService } from '../components/modals/modals.service';
import { BoxInputs } from '../components/send/box-inputs';

// Web3Utils is used exclusively for its soliditySha3 function
let Web3Utils = require('web3-utils');

@Injectable({
  providedIn: 'root'
})
export class EboxService {

  boxes_incoming$ = new BehaviorSubject(null);
  boxes_outgoing$ = new BehaviorSubject(null);
  dappReady$ = new BehaviorSubject(false);

  private dappContractAddress;
  private dappContract;

  private stakingContractAddress;
  private stakingContract;

  private tokenDispenserContractAddress;
  private tokenDispenserContract;

  private boxesTimer;
  private refreshRate = 3000;
  private batchSize = 3;

  constructor(
    private connection: ConnectionService,
    private tokenSelector: TokenSelectorService,
    private addressbook: AddressbookService,
    private toasterService: ToasterService,
    private consoleService: ConsoleService,
    private loadingService: LoadingService,
    private ms: ModalsService
  ) {

    // Switch contracts on connection
    this.connection.isConnected$.subscribe((isConnected) => {

      if (!isConnected) {
        this.reset();
        return;
      }

      let chainId = this.connection.chainId$.getValue();

      // The following code sets contracts depending on the current chain
      switch ((chainId || -1).toString()) {
        case "reef-mainnet": // Reef Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.REEF;
          break;
        case "reef-testnet": // Reef Testnet
          this.dappContractAddress = ETHBOX.ADDRESSES.REEF_TESTNET;
          this.tokenDispenserContractAddress = TOKEN_DISPENSER.ADDRESSES.REEF_TESTNET;
          break;
        case "1":            // Ethereum Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.ETHEREUM;
          this.stakingContractAddress = STAKING.ADDRESSES.ETHEREUM;
          break;
        case "4":            // Ethereum Testnet
          this.dappContractAddress = ETHBOX.ADDRESSES.ETHEREUM_TESTNET;
          this.tokenDispenserContractAddress = TOKEN_DISPENSER.ADDRESSES.ETHEREUM_TESTNET;
          break;
        case "56":           // Binance Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.BINANCE;
          this.stakingContractAddress = STAKING.ADDRESSES.BINANCE;
          break;
        case "97":           // Binance Testnet
          this.dappContractAddress = ETHBOX.ADDRESSES.BINANCE_TESTNET;
          this.tokenDispenserContractAddress = TOKEN_DISPENSER.ADDRESSES.BINANCE_TESTNET;
          break;
        case "137":          // Matic Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.MATIC;
          break;
        case "80001":        // Matic Testnet
          this.dappContractAddress = ETHBOX.ADDRESSES.MATIC_TESTNET;
          this.tokenDispenserContractAddress = TOKEN_DISPENSER.ADDRESSES.MATIC_TESTNET;
          break;
        case "1284":        // Moonbeam Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.MOONBEAM;
          break;
        case "1285":        // Moonriver Mainnet
          this.dappContractAddress = ETHBOX.ADDRESSES.MOONRIVER;
          break;
        default:
          this.reset();
          throw new Error("Network not recognized.");
      }

      let netInfo = this.connection.networkInfo();
      this.consoleService.addMessage({
        color: "success",
        message: `Successfully connected to ${netInfo.name}!`
      });

      let signer = this.connection.signer$.getValue();

      this.dappContract = new this.connection.ethers.
        Contract(this.dappContractAddress, ETHBOX.ABI, signer);

      if (this.stakingContractAddress) {
        this.stakingContract = new this.connection.ethers.
          Contract(this.stakingContractAddress, STAKING.ABI, signer);
      }

      if (this.tokenDispenserContractAddress) {
        this.tokenDispenserContract = new this.connection.ethers.
          Contract(this.tokenDispenserContractAddress, TOKEN_DISPENSER.ABI, signer);
      }

      this.setBoxesTimer();
      this.dappReady$.next(true);

    });
  }





  private reset() {

    clearTimeout(this.boxesTimer);
    this.dappReady$.next(false);

    this.dappContractAddress = null;
    this.dappContract = null;

    this.stakingContractAddress = null;
    this.stakingContract = null;

    this.tokenDispenserContractAddress = null;
    this.tokenDispenserContract = null;
  }





  // Get wei allowance
  // Read only query
  async getTokenAllowance(address: string): Promise<BigNumber | string> {

    if (address == ADDRESS_ZERO) {
      return MAX_VALUE; // If it's the base token, then allowance is unlimited
    }
    let provider = this.connection.provider$.getValue();
    let selectedAccount = this.connection.selectedAccount$.getValue();
    let contract = new this.connection.ethers.Contract(address, ERC20_ABI, provider);
    return await contract.allowance(selectedAccount, this.dappContractAddress);
  }





  // Get wei balance
  // Read only query
  async getTokenBalance(address: string): Promise<BigNumber> {

    let provider = this.connection.provider$.getValue();
    let selectedAccount = this.connection.selectedAccount$.getValue();

    if (address == ADDRESS_ZERO) {
      return await provider.getBalance(selectedAccount);
    }
    let contract = new this.connection.ethers.Contract(address, ERC20_ABI, provider);
    return await contract.balanceOf(selectedAccount);
  }





  private hash(string) {
    return Web3Utils.soliditySha3(string);
  }





  doubleHash(string) {
    return this.hash(this.hash(string));
  }




  // Set up the loop for fetching boxes from the blockchain
  private setBoxesTimer() {

    let loop = async () => {
      try {
        await this.emitBoxesIn();
        await this.emitBoxesOut();
      }
      catch (err) {
        console.error(`There was an error while retrieving the boxes. (${err})`);
      }
      this.boxesTimer = setTimeout(() => loop(), this.refreshRate);
    }

    // Call the above immediately
    if (!this.boxesTimer) loop();
  }





  // From BlockchainBox to AppBox
  private async transformBox({ box, index }) {

    let result: AppBox = {
      id: index.toString(),
      mode: undefined,
      timestamp: box.timestamp.toString(),
      status: box.taken ? COMPLETE : PENDING,
      isPrivate: !!box.senderHash,

      sender: box.senderHash || box.sender,
      recipient: box.recipientHash || box.recipient,
      passHashHash: box.passHashHash,

      sendTokenInfo: undefined,
      sendValueWei: undefined,
      sendValueDecimal: undefined
    };

    // Set mode
    if (box.requestToken === undefined || box.requestValue.toString() === "0") {
      result.mode = ONE_WAY;
    }
    else {
      result.mode = OTC_TRADE;
    }

    let senderInfo = this.addressbook.whois(box.sender);
    if (senderInfo) {
      result.senderName = senderInfo.label;
    }
    let recipientInfo = this.addressbook.whois(box.recipient);
    if (recipientInfo) {
      result.recipientName = recipientInfo.label;
    }

    // Set send token stuff
    result.sendTokenInfo = await this.tokenSelector.getTokenInfo(box.sendToken);
    result.sendValueWei = box.sendValue;
    result.sendValueDecimal = this.connection.
      weiToDecimal(box.sendValue, result.sendTokenInfo.decimals);

    // Set request token stuff
    if (box.requestToken !== undefined && box.requestValue.toString() !== "0") {
      result.requestTokenInfo = await this.tokenSelector.getTokenInfo(box.requestToken);
      result.requestValueWei = box.requestValue,
        result.requestValueDecimal = this.connection.
          weiToDecimal(box.requestValue, result.requestTokenInfo.decimals);
    }

    return result;
  }





  // Read only query
  async emitBoxesIn(): Promise<void> {

    let selectedAccount = this.connection.selectedAccount$.getValue();

    let [indices, privacyIndices] = await Promise.all([
      this.dappContract.getBoxesIncoming(),
      this.dappContract.getBoxesIncomingWithPrivacy()
    ]);
    let mergedIndices = [
      ...indices.map(i => ({ type: "normal", i })),
      ...privacyIndices.map(i => ({ type: "privacy", i }))
    ];

    let boxes = [];

    // Fetch boxes in batches to speed up the process
    for (let i = 0; i < mergedIndices.length; i += this.batchSize) {
      let batch = mergedIndices.slice(i, i + this.batchSize);
      boxes = boxes.concat(
        await Promise.all(

          batch.map(entry =>
            new Promise(async (resolve) => {
              let box;
              if (entry.type === "normal") {
                box = await this.dappContract.getBox(entry.i);
              }
              else {
                box = await this.dappContract.getBoxWithPrivacy(entry.i);
              }
              resolve({ box, index: entry.i });
            })
          )

        )
      );
    }

    // Filter out all boxes user has sent to him/her-self
    boxes = boxes.filter(b =>
      b.box.senderHash ?
        b.box.senderHash !== this.hash(selectedAccount) :
        b.box.sender !== selectedAccount
    );

    // Transform all boxes from BlockchainBox to AppBox
    boxes = await Promise.all(boxes.map(this.transformBox.bind(this)));
    window["_incomingBoxes"] = boxes;
    this.boxes_incoming$.next(boxes);
  }





  // Read only query
  async emitBoxesOut(): Promise<void> {

    let [indices, privacyIndices] = await Promise.all([
      this.dappContract.getBoxesOutgoing(),
      this.dappContract.getBoxesOutgoingWithPrivacy()
    ]);
    let mergedIndices = [
      ...indices.map(i => ({ type: "normal", i })),
      ...privacyIndices.map(i => ({ type: "privacy", i }))
    ];

    let boxes = [];

    // Fetch boxes in batches to speed up the process
    for (let i = 0; i < mergedIndices.length; i += this.batchSize) {
      let batch = mergedIndices.slice(i, i + this.batchSize);
      boxes = boxes.concat(
        await Promise.all(

          batch.map(entry =>
            new Promise(async (resolve) => {
              let box;
              if (entry.type === "normal") {
                box = await this.dappContract.getBox(entry.i);
              }
              else {
                box = await this.dappContract.getBoxWithPrivacy(entry.i);
              }
              resolve({ box, index: entry.i });
            })
          )

        )
      );
    }

    // Transform all boxes from BlockchainBox to AppBox
    boxes = await Promise.all(boxes.map(this.transformBox.bind(this)));
    window["_outgoingBoxes"] = boxes;
    this.boxes_outgoing$.next(boxes);
  }





  // Cancel a box
  // State changing operation
  async cancelBox(box: AppBox): Promise<void> {

    this.loadingService.on(box.id);

    // Making of the transaction
    let tx;
    try {
      if (box.isPrivate) {
        tx = await this.dappContract.cancelBoxWithPrivacy(box.id, { value: ZERO });
      }
      else {
        tx = await this.dappContract.cancelBox(box.id, { value: ZERO });
      }
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Cancelling aborted."
      });
      this.loadingService.off(box.id);
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      this.loadingService.off(box.id);
      throw err;
    }

    this.notifyConfirmTx("Cancelling transaction successful!", receipt);

    // Refetch boxes, stop loading and return to the consumer
    await this.emitBoxesOut();
    this.loadingService.off(box.id);
    return receipt;
  }





  // Accept a box
  // State changing operation
  async acceptBox(box: AppBox, passphrase: string): Promise<void> {

    // Amount of base token transacted during this operation
    let baseWei: string | BigNumber = ZERO;

    // If it's an trade request, then do some checks
    if (box.mode === OTC_TRADE) {

      // Check balance (If the amount requested is more than the user balance, then notify the user with a toast and stop here.) 
      let balanceWei = await this.getTokenBalance(box.requestTokenInfo.address);
      if (box.requestValueWei.gt(balanceWei)) {

        // Get balance in decimal format to show it to the user
        let balanceDecimal = this.connection.
          weiToDecimal(balanceWei, box.requestTokenInfo.decimals);

        let errTxt = `Not enough ${box.requestTokenInfo.symbol} to complete the trade. (Balance is ${balanceDecimal} ${box.requestTokenInfo.symbol}.)`;
        this.toasterService.addToaster({ color: "danger", message: errTxt });
        throw new Error(errTxt);
      }

      // Check allowance (If the requested token is the base token, then there no need to check the allowance. If that's the case set baseWei to requestedValueWei)
      if (!box.requestTokenInfo.isBase) {

        // If allowance is not enough, then try to set unlimited spending
        let allowanceWei = await this.getTokenAllowance(box.requestTokenInfo.address);
        if (box.requestValueWei.gt(allowanceWei)) {

          // Turn on the loading indicator for the give box and open a modal to request the allowance
          this.loadingService.on(box.id);
          let allow = await this.ms.openWithPromise(
            this.ms.modals.ALLOW_CONTRACT,
            { token: box.requestTokenInfo }
          );

          // If the user allowed, then send an approve unlimited request to the provider
          if (allow) {
            try {
              await this.approveUnlimitedSpending(box.requestTokenInfo.address);
            }
            catch (err) {

              // User has rejected the request from the provider
              this.loadingService.off(box.id);
              throw err;
            }

            // Approve unlimited went through
            this.loadingService.off(box.id);
          }
          else {

            // User has rejected the request from the app
            this.loadingService.off(box.id);
            throw new Error("User rejected approve unlimited spending.");
          }
        }
      }
      else {
        baseWei = box.requestValueWei;
      }

    }

    this.loadingService.on(box.id);

    // Making of the transaction
    let tx;
    try {
      if (box.isPrivate) {
        tx = await this.dappContract.
          clearBoxWithPrivacy(box.id, this.hash(passphrase), { value: baseWei });
      }
      else {
        tx = await this.dappContract.
          clearBox(box.id, this.hash(passphrase), { value: baseWei });
      }
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Unbox aborted."
      });
      this.loadingService.off(box.id);
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      this.loadingService.off(box.id);
      throw err;
    }

    this.notifyConfirmTx("Unboxed successfully!", receipt);
    
    // Refetch boxes, stop loading and return to the consumer
    await this.emitBoxesIn();
    this.loadingService.off(box.id);
    return receipt;
  }





  // Make a box
  // State changing operation
  async createBox(boxInputs: BoxInputs): Promise<void> {

    // Amount of base token transacted during this operation
    let baseWei: string | BigNumber = ZERO;

    // Get send token info and send value in wei
    let sendTokenInfo = await this.tokenSelector.getTokenInfo(boxInputs.sendToken);
    let sendValueWei = await this.connection.decimalToWei(
      boxInputs.sendValueDecimal,
      sendTokenInfo.decimals
    );

    // Check send value
    if (sendValueWei.gte(MAX_VALUE)) {
      let errTxt = "Send value is too high.";
      this.toasterService.addToaster({ color: "danger", message: errTxt });
      throw new Error(errTxt);
    }
    if (sendValueWei.lte(ZERO)) {
      let errTxt = "Send value is too low.";
      this.toasterService.addToaster({ color: "danger", message: errTxt });
      throw new Error(errTxt);
    }

    // Define default values for request token (used when mode is one way)
    let requestTokenInfo = await this.tokenSelector.getTokenInfo(ADDRESS_ZERO);
    let requestValueWei = BigNumber.from(ZERO);

    // If otc trade, then get request token info and request value in wei
    if (boxInputs.mode === OTC_TRADE) {
      requestTokenInfo = await this.tokenSelector.getTokenInfo(boxInputs.requestToken);
      requestValueWei = await this.connection.decimalToWei(
        boxInputs.requestValueDecimal,
        requestTokenInfo.decimals
      );

      // Check request value
      if (requestValueWei.gte(MAX_VALUE)) {
        let errTxt = "Request value is too high.";
        this.toasterService.addToaster({ color: "danger", message: errTxt });
        throw new Error(errTxt);
      }
      if (requestValueWei.lte(ZERO)) {
        let errTxt = "Request value is too low.";
        this.toasterService.addToaster({ color: "danger", message: errTxt });
        throw new Error(errTxt);
      }
    }

    // Check balance (If the amount sent is more than the user balance, then notify the user with a toast and stop here.)
    let balanceWei = await this.getTokenBalance(boxInputs.sendToken);
    if (sendValueWei.gt(balanceWei)) {

      // Get balance in decimal format to show it to the user
      let balanceDecimal = this.connection.
        weiToDecimal(balanceWei, sendTokenInfo.decimals);

      let errTxt = `Trying to send more ${sendTokenInfo.symbol} than disposable. (Sending ${boxInputs.sendValueDecimal}, having ${balanceDecimal}.)`;
      this.toasterService.addToaster({ color: "danger", message: errTxt });
      throw new Error(errTxt);
    }

    // Check allowance (If the send token is the base token, then there no need to check the allowance. If that's the case set baseWei to sendValueWei)
    if (!sendTokenInfo.isBase) {

      // If allowance is not enough, then try to set unlimited spending
      let allowanceWei = await this.getTokenAllowance(sendTokenInfo.address);
      if (sendValueWei.gt(allowanceWei)) {

        // Turn on the loading indicator and open a modal to request the allowance
        this.loadingService.on(boxInputs.mode);
        let allow = await this.ms.openWithPromise(
          this.ms.modals.ALLOW_CONTRACT,
          { token: sendTokenInfo }
        );

        // If the user allowed, then send an approve unlimited request to the provider
        if (allow) {
          try {
            await this.approveUnlimitedSpending(sendTokenInfo.address);
          }
          catch (err) {

            // User has rejected the request from the provider
            this.loadingService.off(boxInputs.mode);
            throw err;
          }

          // Approve unlimited went through
          this.loadingService.off(boxInputs.mode);
        }
        else {

          // User has rejected the request from the app
          this.loadingService.off(boxInputs.mode);
          throw new Error("User rejected approve unlimited spending.");
        }
      }
    }
    else {
      baseWei = sendValueWei;
    }

    this.loadingService.on(boxInputs.mode);

    // Making of the transaction
    let tx;
    try {
      if (boxInputs.isPrivate) {
        tx = await this.dappContract.
          createBoxWithPrivacy(
            this.hash(boxInputs.recipient),
            sendTokenInfo.address,
            sendValueWei,
            this.doubleHash(boxInputs.pass),
            { value: baseWei }
          );
      }
      else {
        tx = await this.dappContract.
          createBox(
            boxInputs.recipient,
            sendTokenInfo.address,
            sendValueWei,
            requestTokenInfo.address,
            requestValueWei,
            this.doubleHash(boxInputs.pass),
            { value: baseWei }
          );
      }
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Sending aborted."
      });
      this.loadingService.off(boxInputs.mode);
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      this.loadingService.off(boxInputs.mode);
      throw err;
    }

    this.notifyConfirmTx("Your outgoing transaction has been confirmed!", receipt);

    // Refetch boxes, stop loading and return to the consumer
    await this.emitBoxesOut();
    this.loadingService.off(boxInputs.mode);
    return receipt;
  }





  // Give the user 100 of the selected test token
  // State changing operation
  async giveTestToken(tokenSymbol: string, tokenIndex: number) {

    // Making of the transaction
    let tx;
    try {
      tx = await this.tokenDispenserContract.giveToken(
        tokenIndex,
        this.connection.decimalToWei("100", 18)
      );
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Token dispending aborted by user."
      });
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      throw err;
    }

    this.notifyConfirmTx(`You have received 100 ${tokenSymbol} tokens!`, receipt);

    // Return receipt to the consumer
    return receipt;
  }





  // Return the decimal value for the staking rewards the user can claim
  // Read only query
  async getReward() {
    return this.connection.weiToDecimal(
      await this.stakingContract.getUnclaimedReward(),
      18
    );
  }





  // State changing operation
  async claimReward() {

    this.loadingService.on("staking");

    // Making of the transaction
    let tx;
    try {
      tx = await this.stakingContract.claimReward();
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Claiming reward aborted by user."
      });
      this.loadingService.off("staking");
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      this.loadingService.off("staking");
      throw err;
    }

    this.notifyConfirmTx(`Reward has been claimed!`, receipt);
    this.loadingService.off("staking");

    // Return receipt to the consumer
    return receipt;
  }






  // Approve unlimited spending for the given address
  // State changing operation
  private async approveUnlimitedSpending(tokenAddress: string): Promise<void> {

    let signer = this.connection.signer$.getValue();
    let tokenContract = new this.connection.ethers.
      Contract(tokenAddress, ERC20_ABI, signer);

    // Making of the transaction
    let tx;
    try {
      tx = await tokenContract.approve(this.dappContractAddress, MAX_VALUE);
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Token approval aborted by user."
      });
      throw err;
    }

    this.notifyWaitTx(tx);

    let receipt;
    try {
      receipt = await tx.wait();
    }
    catch (err) {
      this.notifyErrorTx(err);
      throw err;
    }

    this.notifyConfirmTx(`Successfully approved allowance of ${tokenAddress}!`, receipt);

    // Return receipt to the consumer
    return receipt;
  }





  // Show the user an info toast that the dapp is waiting for transaction confirmation
  private notifyWaitTx(tx) {
    this.toasterService.addToaster({
      color: "info",
      message: "Waiting for transaction to confirm. (May take a while, depending on network load.)"
    });
    this.consoleService.addMessage({
      color: "info",
      message: `Waiting for transaction to confirm. (Tx hash: ${tx.hash}.)`
    });
  }





  // Show the user a danger toast that the dapp is waiting for transaction confirmation
  private notifyErrorTx(err) {
    this.toasterService.addToaster({ color: "danger", message: "Something went wrong. (See the console to know more.)" });
    this.consoleService.addMessage({ color: "danger", message: err });
  }





  // Show the user a success toast that the transaction has been confirmed
  private notifyConfirmTx(message: string, receipt) {
    this.toasterService.addToaster({ color: "success", message });
    this.consoleService.addMessage({
      color: "success",
      message: `"${message}" (Gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash}.)`
    });
  }

}
