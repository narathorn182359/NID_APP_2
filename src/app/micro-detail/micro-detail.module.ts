import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroDetailPageRoutingModule } from './micro-detail-routing.module';

import { MicroDetailPage } from './micro-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicroDetailPageRoutingModule
  ],
  declarations: [MicroDetailPage]
})
export class MicroDetailPageModule {}
