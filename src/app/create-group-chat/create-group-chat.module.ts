import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGroupChatPageRoutingModule } from './create-group-chat-routing.module';

import { CreateGroupChatPage } from './create-group-chat.page';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateGroupChatPageRoutingModule,
    IonicSelectableModule
    
   
  ],
  declarations: [CreateGroupChatPage]
})
export class CreateGroupChatPageModule {}
