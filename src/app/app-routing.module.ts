import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendComponent } from './components/send/send.component';
import { BgChangerGuard } from './guards/bg-changer.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { BoxesComponent } from './components/my-transactions/boxes/boxes.component';
import { BoxDetailsComponent } from './components/my-transactions/boxes/box-details/box-details.component';
import { AuthGuard } from './guards/auth.guard';
import { ONE_WAY, OTC_TRADE } from './components/my-transactions/boxes/box';
import { StakingComponent } from './components/staking/staking.component';
import { GovernanceComponent } from './components/governance/governance.component';
import { VotingsComponent } from './components/governance/votings/votings.component';
import { VotingDetailsComponent } from './components/governance/votings/voting-details/voting-details.component';
import { COMMUNITY, PROJECT } from './components/governance/votings/voting';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { bgClass: "login-bg" },
    resolve: [ BgChangerGuard ]
  },
  {
    path: "main",
    component: MainComponent,
    data: { bgClass: "default-bg" },
    resolve: [ BgChangerGuard ],
    canActivate: [ AuthGuard ],
    runGuardsAndResolvers: "always",
    children: [
      {
        path: "",
        redirectTo: "send",
        pathMatch: "full"
      },
      {
        path: "send",
        component: SendComponent,
        data: { mode: ONE_WAY }
      },
      {
        path: "otc",
        component: SendComponent,
        data: { mode: OTC_TRADE },
      },
      {
        path: "transactions",
        component: MyTransactionsComponent,
        children: [
          {
            path: "",
            redirectTo: "incoming",
            pathMatch: "full"
          },
          {
            path: "incoming",
            component: BoxesComponent,
            data: { mode: "incoming" },
          },
          {
            path: "outgoing",
            component: BoxesComponent,
            data: { mode: "outgoing" },
          },
        ]
      },
      {
        path: "transactions/incoming/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "incoming", typeOfBox: "normal" },
      },
      {
        path: "transactions/outgoing/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "outgoing", typeOfBox: "normal" },
      },
      {
        path: "transactions/incoming/private/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "incoming", typeOfBox: "private" },
      },
      {
        path: "transactions/outgoing/private/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "outgoing", typeOfBox: "private" },
      },
      {
        path: "staking",
        component: StakingComponent,
      },
      {
        path: "governance",
        component: GovernanceComponent,
        children: [
          {
            path: "",
            redirectTo: "project",
            pathMatch: "full"
          },
          {
            path: "project",
            component: VotingsComponent,
            data: { mode: PROJECT },
          },
          {
            path: "community",
            component: VotingsComponent,
            data: { mode: COMMUNITY },
          },
        ]
      },
      {
        path: "governance/project/:votingId",
        component: VotingDetailsComponent,
        data: { mode: PROJECT },
      },
      {
        path: "governance/community/:votingId",
        component: VotingDetailsComponent,
        data: { mode: COMMUNITY },
      },
      {
        path: "**",
        component: NotFoundComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { bgClass: "default-bg" },
    resolve: [ BgChangerGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
