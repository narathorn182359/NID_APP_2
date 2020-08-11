import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletRewardsPageRoutingModule } from './wallet-rewards-routing.module';

import { WalletRewardsPage } from './wallet-rewards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletRewardsPageRoutingModule
  ],
  declarations: [WalletRewardsPage]
})
export class WalletRewardsPageModule {}
