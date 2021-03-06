import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingChatGroupPageRoutingModule } from './setting-chat-group-routing.module';

import { SettingChatGroupPage } from './setting-chat-group.page';
import { AddstafftochatPageModule } from '../addstafftochat/addstafftochat.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingChatGroupPageRoutingModule,
    AddstafftochatPageModule,
    IonicSelectableModule
   
  ],
  declarations: [SettingChatGroupPage]
})
export class SettingChatGroupPageModule {}
