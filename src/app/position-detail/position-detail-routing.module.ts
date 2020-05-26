import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositionDetailPage } from './position-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PositionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionDetailPageRoutingModule {}
