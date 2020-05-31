import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Km360detailPageRoutingModule } from './km360detail-routing.module';

import { Km360detailPage } from './km360detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Km360detailPageRoutingModule
  ],
  declarations: [Km360detailPage]
})
export class Km360detailPageModule {}
