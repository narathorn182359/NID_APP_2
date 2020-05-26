import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroDetailPage } from './micro-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MicroDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroDetailPageRoutingModule {}
