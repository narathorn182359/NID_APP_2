import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStaffPageRoutingModule } from './detail-staff-routing.module';

import { DetailStaffPage } from './detail-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStaffPageRoutingModule
  ],
  declarations: [DetailStaffPage]
})
export class DetailStaffPageModule {}
