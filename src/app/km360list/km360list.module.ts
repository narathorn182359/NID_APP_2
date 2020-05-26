import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Km360listPageRoutingModule } from './km360list-routing.module';

import { Km360listPage } from './km360list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Km360listPageRoutingModule
  ],
  declarations: [Km360listPage]
})
export class Km360listPageModule {}
