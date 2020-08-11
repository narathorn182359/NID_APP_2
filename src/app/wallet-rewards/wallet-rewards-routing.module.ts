import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletRewardsPage } from './wallet-rewards.page';

const routes: Routes = [
  {
    path: '',
    component: WalletRewardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRewardsPageRoutingModule {}
