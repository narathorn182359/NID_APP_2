import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMSPageRoutingModule } from './pms-routing.module';

import { PMSPage } from './pms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMSPageRoutingModule
  ],
  declarations: [PMSPage]
})
export class PMSPageModule {}
