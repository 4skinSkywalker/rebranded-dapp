import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/components/modals/addressbook/contact';
import { ModalsService } from 'src/app/components/modals/modals.service';
import { Token } from 'src/app/components/modals/token-selector/token';
import { TokenSelectorService } from 'src/app/components/modals/token-selector/token-selector.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { EboxService } from 'src/app/services/ebox.service';
import { maskCurrency, unmaskCurrency, formToObject, delay, CURRENCY_REGEX } from "../../utilities/utils";
import { ONE_WAY, OTC_TRADE } from '../my-transactions/boxes/box';
import { ToasterService } from '../toaster/toaster.service';
import { BoxInputs } from './box-inputs';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html'
})
export class SendComponent implements OnInit, AfterViewInit {

  CURRENCY_REGEX = CURRENCY_REGEX;
  ONE_WAY = ONE_WAY;
  OTC_TRADE = OTC_TRADE;
  mask = maskCurrency;
  unmask = unmaskCurrency;

  @ViewChild("form") formRef;

  @ViewChild("recipient") recipientRef;
  @ViewChild("passphrase") passphraseRef;
  @ViewChild("sendAmount") sendAmountRef;
  @ViewChild("sendTokenSymbol") sendTokenSymbolRef;
  @ViewChild("sendTokenAddress") sendTokenAddressRef;

  @ViewChild("requestAmount") requestAmountRef;
  @ViewChild("requestTokenSymbol") requestTokenSymbolRef;
  @ViewChild("requestTokenAddress") requestTokenAddressRef;

  @ViewChild("privacyMode") privacyMode;  
  @ViewChild("keepInputs") keepInputs;  

  mode;

  tokenDecimalBalance;
  private tokenBalanceTimer;
  private refreshRate = 450;

  private sendTokenNotFoundMessageShown = false;
  private requestTokenNotFoundMessageShown = false;

  constructor(
    private ms: ModalsService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenSelector: TokenSelectorService,
    private toasterService: ToasterService,
    private connection: ConnectionService,
    private eboxService: EboxService
  ) { }
  
  ngOnInit() {
    this.mode = this.route.snapshot.data.mode;
  }

  ngAfterViewInit() {

    // Update fields from query params on route events
    this.route.queryParams.subscribe(this.fieldsFromQueryParams.bind(this));

    // Update fields from query params when tokens are loaded
    this.tokenSelector.tokens$. 
      subscribe(tokens => {
        if (tokens.length)
          this.fieldsFromQueryParams(this.route.snapshot.queryParams);
      });
  }

  ngOnDestroy() {
    this.stopTokenBalanceLoop();
  }

  // Start the loop for updating the decimal balance of a token
  private startTokenBalanceLoop(address: string) {

    // Stop the previously running loop
    this.stopTokenBalanceLoop();

    this.tokenBalanceTimer = setInterval(async () => {

      // Get info, balance and allowance
      let [
        tokenInfo,
        tokenWeiBalance
      ] = [
        await this.tokenSelector.getTokenInfo(address),
        await this.eboxService.getTokenBalance(address)
      ];

      
      this.tokenDecimalBalance = this.connection.
        weiToDecimal(tokenWeiBalance, tokenInfo.decimals);
    }, this.refreshRate);
  }

  private stopTokenBalanceLoop() {

    // If there's no loop, then stop here
    if (!this.tokenBalanceTimer) {
      return;
    }

    clearInterval(this.tokenBalanceTimer);
    this.tokenBalanceTimer = null;
  }

  // Called everytime the input fields are changed
  // Valorize query params from input fields + mask amounts
  queryParamsFromFields() {
    let queryParams: any = {};

    // Recipient
    let recipientVal = this.recipientRef.nativeElement.value;
    if (recipientVal !== "") queryParams.recipient = recipientVal;

    // Send stuff
    let sendAmountVal = this.sendAmountRef.nativeElement.value;

    // Mask send amount
    let maskedSendAmount = maskCurrency(sendAmountVal);
    if (sendAmountVal !== "") queryParams.sendAmount = maskedSendAmount;

    let sendTokenAddressVal = this.sendTokenAddressRef.nativeElement.value;
    if (sendTokenAddressVal !== "") queryParams.sendTokenAddress = sendTokenAddressVal;

    // Request stuff (when otc)
    if (this.mode === OTC_TRADE) {
      let requestAmountVal = this.requestAmountRef.nativeElement.value;

      // Mask request amount
      let maskedRequestAmount = maskCurrency(requestAmountVal);
      if (requestAmountVal !== "") queryParams.requestAmount = maskedRequestAmount;

      let requestTokenAddressVal = this.requestTokenAddressRef.nativeElement.value;
      if (requestTokenAddressVal !== "") queryParams.requestTokenAddress = requestTokenAddressVal;
    }

    this.router.navigate(["."], { relativeTo: this.route, queryParams });
  }

  // Called everytime the query parameters are changed
  // Valorize input fields from query params
  async fieldsFromQueryParams(queryParams) {

    // Recipient
    this.recipientRef.nativeElement.value = queryParams.recipient || "";

    // Send stuff
    this.sendAmountRef.nativeElement.value = queryParams.sendAmount || "";
    this.sendTokenAddressRef.nativeElement.value = queryParams.sendTokenAddress || "";

    // Get tokens
    let tokens = this.tokenSelector.read();

    // Get token symbol from send token address
    if (tokens.length && queryParams.sendTokenAddress) {

      // Find token
      let sendTokenFound = tokens.
        find(token => token.address === queryParams.sendTokenAddress);

      if (sendTokenFound) {
        this.sendTokenSymbolRef.nativeElement.textContent = sendTokenFound.symbol;

        await delay(50); // Hackfix to prevent Angular to freak out
  
        // Reset as not loaded
        this.tokenDecimalBalance = null;

        this.startTokenBalanceLoop(queryParams.sendTokenAddress);
      }
      else {

        if (!this.sendTokenNotFoundMessageShown) {
          this.toasterService.addToaster({ color: "danger", message: "This send token is not found in this network. (look at the URL)" });
          this.sendTokenNotFoundMessageShown = true;
        }

        this.sendTokenSymbolRef.nativeElement.textContent = "--";

        // Reset as not choosen
        this.tokenDecimalBalance = undefined;
      }
    }
    
    // Request stuff
    if (this.mode === OTC_TRADE) {
      this.requestAmountRef.nativeElement.value = queryParams.requestAmount || "";
      this.requestTokenAddressRef.nativeElement.value = queryParams.requestTokenAddress || "";

      // Get token symbol from request token address
      if (tokens.length && queryParams.requestTokenAddress) {

        // Find token
        let requestTokenFound = tokens.
          find(token => token.address === queryParams.requestTokenAddress);

        if (requestTokenFound) {
          this.requestTokenSymbolRef.nativeElement.textContent = requestTokenFound.symbol;
        }
        else {

          if (!this.requestTokenNotFoundMessageShown) {
            this.toasterService.addToaster({ color: "danger", message: "This request token is not found in this network. (look at the URL)" });
            this.requestTokenNotFoundMessageShown = true;
          }

          this.requestTokenSymbolRef.nativeElement.textContent = "-";
        }
      }
    }
  }

  async spawnAddressbook() {
    let contact: Contact = await this.ms.openWithPromise(this.ms.modals.ADDRESSBOOK_READ);
    this.recipientRef.nativeElement.value = contact.address;
    this.passphraseRef.nativeElement.value = contact.passphrase;
    this.queryParamsFromFields();
  }

  async spawnTokenSelector(what: "send"|"request") {
    let token: Token = await this.ms.openWithPromise(this.ms.modals.TOKEN_SELECTOR_READ);
    this[what + "TokenSymbolRef"].nativeElement.textContent = token.symbol;
    this[what + "TokenAddressRef"].nativeElement.value = token.address;
    this.queryParamsFromFields();
  }

  async send() {

    // Extract fields from form
    let boxInputs: BoxInputs = formToObject(this.formRef.nativeElement);

    // Set mode
    boxInputs.mode = this.mode;

    // Unmask sendValue and requestValue
    boxInputs.sendValueDecimal = unmaskCurrency(boxInputs.sendValueDecimal);
    if (this.mode === OTC_TRADE) {
      boxInputs.requestValueDecimal = unmaskCurrency(boxInputs.requestValueDecimal);
    }

    // Private mode is available only for one way transactions
    if (this.mode === ONE_WAY) {
      boxInputs.isPrivate = this.privacyMode.nativeElement.checked;
    }

    await this.eboxService.createBox(boxInputs);
    
    // Clean the form after sending
    if (!this.keepInputs.nativeElement.checked) {
      this.formRef.nativeElement.reset();
    }
  }

}
