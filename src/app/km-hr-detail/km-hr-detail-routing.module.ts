import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmHrDetailPage } from './km-hr-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KmHrDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KmHrDetailPageRoutingModule {}
