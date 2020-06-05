import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatGroupRoomPageRoutingModule } from './chat-group-room-routing.module';

import { ChatGroupRoomPage } from './chat-group-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatGroupRoomPageRoutingModule
  ],
  declarations: [ChatGroupRoomPage]
})
export class ChatGroupRoomPageModule {}
