import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroPageRoutingModule } from './micro-routing.module';

import { MicroPage } from './micro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicroPageRoutingModule
  ],
  declarations: [MicroPage]
})
export class MicroPageModule {}
