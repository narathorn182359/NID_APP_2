import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KpiDetailPageRoutingModule } from './kpi-detail-routing.module';

import { KpiDetailPage } from './kpi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KpiDetailPageRoutingModule
  ],
  declarations: [KpiDetailPage]
})
export class KpiDetailPageModule {}
