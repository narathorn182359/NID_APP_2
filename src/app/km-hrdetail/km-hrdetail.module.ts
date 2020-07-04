import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KmHrdetailPageRoutingModule } from './km-hrdetail-routing.module';

import { KmHrdetailPage } from './km-hrdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KmHrdetailPageRoutingModule
  ],
  declarations: [KmHrdetailPage]
})
export class KmHrdetailPageModule {}
