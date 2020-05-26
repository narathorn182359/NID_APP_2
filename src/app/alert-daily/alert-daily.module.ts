import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDailyPageRoutingModule } from './alert-daily-routing.module';

import { AlertDailyPage } from './alert-daily.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDailyPageRoutingModule
  ],
  declarations: [AlertDailyPage]
})
export class AlertDailyPageModule {}
