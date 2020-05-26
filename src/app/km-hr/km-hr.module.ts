import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KmHrPageRoutingModule } from './km-hr-routing.module';

import { KmHrPage } from './km-hr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KmHrPageRoutingModule
  ],
  declarations: [KmHrPage]
})
export class KmHrPageModule {}
