import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatGroupRoomPage } from './chat-group-room.page';

const routes: Routes = [
  {
    path: '',
    component: ChatGroupRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatGroupRoomPageRoutingModule {}
