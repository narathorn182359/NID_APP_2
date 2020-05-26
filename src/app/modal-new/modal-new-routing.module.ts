import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNewPage } from './modal-new.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNewPageRoutingModule {}
