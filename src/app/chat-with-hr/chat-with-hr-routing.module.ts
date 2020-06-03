import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatWithHrPage } from './chat-with-hr.page';

const routes: Routes = [
  {
    path: '',
    component: ChatWithHrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWithHrPageRoutingModule {}
