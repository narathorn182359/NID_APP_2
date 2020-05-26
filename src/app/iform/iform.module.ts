import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IformPageRoutingModule } from './iform-routing.module';

import { IformPage } from './iform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IformPageRoutingModule
  ],
  declarations: [IformPage]
})
export class IformPageModule {}
