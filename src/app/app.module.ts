import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendComponent } from './components/send/send.component';
import { LoginComponent } from './components/login/login.component';
import { MultiplierFormatterPipe } from './pipes/multiplier-formatter.pipe';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToastComponent } from './components/toaster/toast/toast.component';
import { ConsoleComponent } from './components/offcanvases/console/console.component';
import { ConsoleMessageComponent } from './components/offcanvases/console/console-message/console-message.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { WidthAsValueLengthDirective } from './directives/width-as-value-length.directive';
import { DclHostDirective } from './directives/dcl-host.directive';
import { ModalsComponent } from './components/modals/modals.component';
import { CopyablePlaintextComponent } from './components/copyable-plaintext/copyable-plaintext.component';
import { ListSearchPipe } from './pipes/list-search.pipe';
import { TokenSelectorCreateComponent } from './components/modals/token-selector/token-selector-create/token-selector-create.component';
import { TokenSelectorReadComponent } from './components/modals/token-selector/token-selector-read/token-selector-read.component';
import { AddressbookCreateComponent } from './components/modals/addressbook/addressbook-create/addressbook-create.component';
import { AddressbookReadComponent } from './components/modals/addressbook/addressbook-read/addressbook-read.component';
import { AddressbookUpdateComponent } from './components/modals/addressbook/addressbook-update/addressbook-update.component';
import { BsPopoverDirective } from './directives/bs-popover.directive';
import { MainComponent } from './components/main/main.component';
import { InvisibleInputDirective } from './directives/invisible-input.directive';
import { CustomValidationMessageDirective } from './directives/custom-validation-message.directive';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { BoxesComponent } from './components/my-transactions/boxes/boxes.component';
import { BoxListItemComponent } from './components/my-transactions/boxes/box-list-item/box-list-item.component';
import { FiltersComponent } from './components/offcanvases/filters/filters.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { BoxDetailsComponent } from './components/my-transactions/boxes/box-details/box-details.component';
import { ConnectionInfoComponent } from './components/connection-info/connection-info.component';
import { NetworkNotSupportedComponent } from './components/network-not-supported/network-not-supported.component';
import { PasswordTogglerDirective } from './directives/password-toggler.directive';
import { CurrencyFormatterPipe } from './pipes/currency-formatter.pipe';
import { AllowContractComponent } from './components/modals/allow-contract/allow-contract.component';
import { StakingComponent } from './components/staking/staking.component';
import { GovernanceComponent } from './components/governance/governance.component';
import { VotingsComponent } from './components/governance/votings/votings.component';
import { VotingListItemComponent } from './components/governance/votings/voting-list-item/voting-list-item.component';
import { BsTooltipDirective } from './directives/bs-tooltip.directive';
import { VotingDetailsComponent } from './components/governance/votings/voting-details/voting-details.component';
import { VotersComponent } from './components/modals/governance/voters/voters.component';
import { VotingDetailsModalComponent } from './components/modals/governance/voting-details-modal/voting-details-modal.component';
import { ChooseNetworkComponent } from './components/modals/providers/choose-network/choose-network.component';
import { PolkadotProviderModalComponent } from './components/modals/providers/polkadot-provider-modal/polkadot-provider-modal.component';
import { MainCardComponent } from './components/main/main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    SendComponent,
    LoginComponent,
    MultiplierFormatterPipe,
    ToasterComponent,
    ToastComponent,
    ConsoleComponent,
    ConsoleMessageComponent,
    DateFormatterPipe,
    LoadingComponent,
    WidthAsValueLengthDirective,
    CopyablePlaintextComponent,
    ListSearchPipe,
    DclHostDirective,
    ModalsComponent,
    TokenSelectorCreateComponent,
    TokenSelectorReadComponent,
    AddressbookCreateComponent,
    AddressbookReadComponent,
    AddressbookUpdateComponent,
    BsPopoverDirective,
    MainComponent,
    InvisibleInputDirective,
    CustomValidationMessageDirective,
    MyTransactionsComponent,
    BoxesComponent,
    BoxListItemComponent,
    FiltersComponent,
    EllipsisPipe,
    BoxDetailsComponent,
    ConnectionInfoComponent,
    NetworkNotSupportedComponent,
    PasswordTogglerDirective,
    CurrencyFormatterPipe,
    AllowContractComponent,
    StakingComponent,
    GovernanceComponent,
    VotingsComponent,
    VotingListItemComponent,
    VotingDetailsComponent,
    BsTooltipDirective,
    VotersComponent,
    VotingDetailsModalComponent,
    ChooseNetworkComponent,
    PolkadotProviderModalComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
