import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNewPageRoutingModule } from './modal-new-routing.module';

import { ModalNewPage } from './modal-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNewPageRoutingModule
  ],
  declarations: [ModalNewPage]
})
export class ModalNewPageModule {}
