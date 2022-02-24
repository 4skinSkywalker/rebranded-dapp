import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, zip } from 'rxjs';
import { ethers } from "ethers";
import { isNotNullOrUndefined } from '../../utilities/utils';
import { ProvidersService } from './providers.service';
import { BigNumber } from '@ethersproject/bignumber';
import { ToasterService } from 'src/app/components/toaster/toaster.service';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  NOT_SUPPORTED = "Not supported.";

  ethers = ethers;
  provider$ = new BehaviorSubject(undefined);
  signer$ = new BehaviorSubject(undefined);
  chainId$ = new BehaviorSubject(undefined);
  selectedAccount$ = new BehaviorSubject(undefined);
  baseTokenBalance$ = new BehaviorSubject(undefined);
  isConnected$ = new BehaviorSubject(false);
  networkChangeNotification$ = new Subject();

  private LS_KEY = "EBOX_CACHED_PROVIDER";
  private syncRate = 1000;
  private cacheProvider = true;
  private updateVarsTimer;

  constructor(
    private providers: ProvidersService,
    private toasterService: ToasterService
  ) {

    // Tweak the state of connection based on provider, signer, chainId, selectedAccount and baseTokenBalance
    zip(
      this.provider$,
      this.signer$,
      this.chainId$,
      this.selectedAccount$,
      this.baseTokenBalance$
    ).subscribe(values => {

      // When everything has emitted a non-falsy value, it means provider has connected
      let isConnected = values.every(value => isNotNullOrUndefined(value));

      // Emit a new state only when it changes
      if (this.isConnected$.getValue() !== isConnected) {
        this.isConnected$.next(isConnected);
      }
    });

    // Emit a network change when either chainId or selectedAccount change
    this.chainId$.subscribe(value =>
      this.networkChangeNotification$.
        next({ topic: "chainId", value })
    );
    this.selectedAccount$.subscribe(value =>
      this.networkChangeNotification$.
        next({ topic: "selectedAccount", value })
    );

    // When the user has connected start tracking network changes:
    // if the user changes either account or network, then refresh the dapp
    this.isConnected$.pipe(
      filter(value => value),
      switchMap(_ => 
        this.networkChangeNotification$.pipe(
          takeUntil(
            this.isConnected$.pipe(
              filter(value => !value)
            )
          )
        )
      ),
      map(_ => this.checkNetworkSupport())
    ).subscribe();
  }

  private unsupportedShown = false;
  private checkNetworkSupport() {
    
    let netInfo = this.networkInfo();
    if (netInfo.name === this.NOT_SUPPORTED) {

      // Add a banner to tell the user the current network is unsupported
      if (!this.unsupportedShown) {
        let div = document.createElement("DIV");
        div.innerHTML = `
          <div class="position-fixed top-0 start-0 w-100 h-100" style="z-index: 99999; background-color: #000d;">
            <div class="position-absolute bottom-0 w-100 px-3 py-5 bg-danger text-white text-center text-lg-start">
              <div class="display-6">Unsupported network!</div>
              <div class="fs-4">We are currently live on Ethereum, Binance Smart Chain, Polygon, Reef Chain, Moonbeam &amp; Moonriver (Testnets: Rinkeby, BSC, Polygon).</div>
          </div>
        `;
        document.body.appendChild(div.firstElementChild);
        this.unsupportedShown = true;
        return;
      }
    }
    
    window.location.reload();
  }

  checksumAddress(address: string): string {
    return this.ethers.utils.getAddress(address);
  }

  // Check if the given address is valid
  isAddressValid(address: string): boolean {
    return this.ethers.utils.isAddress(address);
  }

  async signMessage(message) {

    let signature;
    try {
      signature = await this.signer$.getValue().
        signMessage(message);
    }
    catch (err) {
      this.toasterService.addToaster({
        color: "danger",
        message: "Message signing aborted by user."
      });
      throw err;
    }

    this.toasterService.addToaster({
      color: "success",
      message: "Message signed successfully!"
    });

    // Return the signature to the consumer
    return signature;
  }

  networkInfo() {
    switch ((this.chainId$.getValue() || -1).toString()) {
      case "reef-mainnet":
        return {
          name: "Reef Chain",
          thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png",
          accountScannerUrl: (address) => `https://reefscan.com/account/${address}`
        };
      case "reef-testnet":
        return {
          name: "Reef Testnet",
          thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png",
          accountScannerUrl: (address) => `https://testnet.reefscan.com/account/${address}`
        };
      case "1":
        return {
          name: "Ethereum",
          thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
          accountScannerUrl: (address) => `https://etherscan.io/address/${address}`
        };
      case "4":
        return {
          name: "Rinkeby Testnet",
          thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
          accountScannerUrl: (address) => `https://rinkeby.etherscan.io/address/${address}`
        };
      case "56":
        return {
          name: "Binance Smart Chain",
          thumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
          accountScannerUrl: (address) => `https://bscscan.com/address/${address}`
        };
      case "97":
        return {
          name: "BSC Testnet",
          thumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
          accountScannerUrl: (address) => `https://testnet.bscscan.com/address/${address}`
        };
      case "137":
        return {
          name: "Polygon",
          thumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
          accountScannerUrl: (address) => `https://polygonscan.com/address/${address}`
        };
      case "80001":
        return {
          name: "Polygon Testnet",
          thumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
          accountScannerUrl: (address) => `https://mumbai.polygonscan.com/address/${address}`
        };
      case "1284":
        return {
          name: "Moonbeam",
          thumb: "https://assets.coingecko.com/coins/images/22459/small/glmr.png",
          accountScannerUrl: (address) => `https://moonscan.io/address/${address}`
        };
      case "1285":
        return {
          name: "Moonriver",
          thumb: "https://assets.coingecko.com/coins/images/17984/small/9285.png",
          accountScannerUrl: (address) => `https://moonriver.moonscan.io/address/${address}`
        };
      default:
        return {
          name: this.NOT_SUPPORTED,
          thumb: null,
          accountScannerUrl: () => ``
        };
    }
  }

  // ethers.utils.formatUnits(wei, decimals)
  weiToDecimal(wei: BigNumber|string, decimals: string|number): string {
    return this.ethers.utils.formatUnits(wei, decimals);
  }

  // ethers.utils.parseUnits(decimalString , decimals)
  decimalToWei(decimalString: string, decimals: string|number): BigNumber {
    return this.ethers.utils.parseUnits(decimalString , decimals);
  }

  private async _connect(resolve, reject, providerName) {

    // Get the provider selected by the user
    let providerConnector = this.providers.dictionary[providerName];
    if (!this.providers.dictionary[providerName]) {
      reject("Provider name not found.");
    }

    let result;
    try {

      // Await the evaluation of the connector
      result = await providerConnector.call(this.providers);
    }
    catch (err) {

      // Clear the cache because it can be that the user dismissed the modal on resumed connection
      this.clearCachedProvider();
      reject(err);
      return;
    }

    this.provider$.next(result.provider);
    this.signer$.next(result.signer);

    // Sync variables
    await this.syncingIntervals(result.getNetwork, result.getAccounts);

    // When the connection is established, cache the provider and resolve
    this.isConnected$.
      subscribe(isConnected => {

        if (isConnected) {
          
          // Cache the current provider
          if (this.cacheProvider) {
            localStorage.setItem(this.LS_KEY, providerName);
          }
  
          resolve(true);
        }
      });
  }

  connect(providerName?) {

    // Return a promise so that it can be awaited by the consumer
    return new Promise(async (resolve, reject) => {

      if (providerName) {
        this._connect(resolve, reject, providerName);
        return;
      }

      // Load the cached provider straight away
      if (this.cacheProvider) {
        this._connect(resolve, reject, localStorage.getItem(this.LS_KEY));
      }
    });
  }

  clearCachedProvider() {
    localStorage.removeItem(this.LS_KEY);

    // Manually removing leftovers from wallet providers
    Object.keys(localStorage).forEach(key => {
      if (/(walletlink|walletconnect)/i.test(key)) {
        localStorage.removeItem(key);
      }
    });
  };

  disconnect() {
    this.clearCachedProvider();
    window.location.reload();
  }

  syncingIntervals(getNetwork, getAccounts) {

    let updateVars = async () => {

      // Chain id
      let chainId;
      try {
        let network = await getNetwork();
        chainId = network.chainId;
      }
      catch (err) {
        console.error("Chain id doesn't seem available...", err);

        // If it was impossible to get, then emit it as null and return
        if (this.chainId$.getValue() !== null) {
          this.chainId$.next(null);
        }
        return;
      }
      if (this.chainId$.getValue() !== chainId) {
        this.chainId$.next(chainId);
      }

      // Selected account
      let selectedAccount;
      let response;
      try {
        response = await getAccounts();
      }
      catch (err) {
        console.error("Selected account doesn't seem available...", err);

        // If user denied the request (e.g. Fortmatic), then disconnect
        if (err.code == "-32603") {
          this.disconnect();
          throw err;
        }

        // If it was impossible to get, then emit it as null and return
        if (this.selectedAccount$.getValue() !== null) {
          this.selectedAccount$.next(null);
        }
        return;
      }
      if (Array.isArray(response)) {
        selectedAccount = response[0];
      }
      else {
        selectedAccount = response;
      }
      if (this.selectedAccount$.getValue() !== selectedAccount) {
        this.selectedAccount$.next(selectedAccount);
      }

      // Base token balance
      let signer = this.signer$.getValue();
      if (isNotNullOrUndefined(signer)) {
        let balance;
        try {
          balance = await signer.getBalance();
        }
        catch (err) {
          console.error("Base token amount doesn't seem available...", err);

          // If it was impossible to get, then emit it as null and return
          if (this.baseTokenBalance$.getValue() !== null) {
            this.baseTokenBalance$.next(null);
          }
          return;
        }
        let ether = ethers.utils.formatEther(balance);
        if (this.baseTokenBalance$.getValue() !== ether) {
          this.baseTokenBalance$.next(ether);
        }
      }
    };

    let loop = async () => {
      await updateVars();
      this.updateVarsTimer = setTimeout(() => loop(), this.syncRate);
    }

    // Call the above immediately
    if (!this.updateVarsTimer) loop();
  };

}
