import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KmHrDetailPageRoutingModule } from './km-hr-detail-routing.module';

import { KmHrDetailPage } from './km-hr-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KmHrDetailPageRoutingModule
  ],
  declarations: [KmHrDetailPage]
})
export class KmHrDetailPageModule {}
