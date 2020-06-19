import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstafftochatPage } from './addstafftochat.page';

const routes: Routes = [
  {
    path: '',
    component: AddstafftochatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstafftochatPageRoutingModule {}
