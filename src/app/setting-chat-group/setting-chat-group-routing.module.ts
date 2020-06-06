import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingChatGroupPage } from './setting-chat-group.page';

const routes: Routes = [
  {
    path: '',
    component: SettingChatGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingChatGroupPageRoutingModule {}
