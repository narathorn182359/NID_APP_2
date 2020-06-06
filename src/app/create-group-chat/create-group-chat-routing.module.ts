import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupChatPage } from './create-group-chat.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGroupChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGroupChatPageRoutingModule {}
