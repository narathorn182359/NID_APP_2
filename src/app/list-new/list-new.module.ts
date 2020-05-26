import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListNewPageRoutingModule } from './list-new-routing.module';
import { ListNewPage } from './list-new.page';
import { ModalNewPageModule } from '../modal-new/modal-new.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListNewPageRoutingModule,
    ModalNewPageModule
  ],
  declarations: [ListNewPage]
})
export class ListNewPageModule {


}
