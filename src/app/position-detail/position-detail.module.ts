import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositionDetailPageRoutingModule } from './position-detail-routing.module';

import { PositionDetailPage } from './position-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositionDetailPageRoutingModule
  ],
  declarations: [PositionDetailPage]
})
export class PositionDetailPageModule {}
