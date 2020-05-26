import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingstaffPageRoutingModule } from './settingstaff-routing.module';

import { SettingstaffPage } from './settingstaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingstaffPageRoutingModule
  ],
  declarations: [SettingstaffPage]
})
export class SettingstaffPageModule {}
