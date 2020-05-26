import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroPage } from './micro.page';

const routes: Routes = [
  {
    path: '',
    component: MicroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroPageRoutingModule {}
