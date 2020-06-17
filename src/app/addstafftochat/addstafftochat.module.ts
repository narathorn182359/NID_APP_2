import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstafftochatPageRoutingModule } from './addstafftochat-routing.module';

import { AddstafftochatPage } from './addstafftochat.page';

import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstafftochatPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AddstafftochatPage]
})
export class AddstafftochatPageModule {}
