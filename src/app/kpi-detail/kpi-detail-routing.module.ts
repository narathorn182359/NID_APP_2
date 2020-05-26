import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDetailPage } from './kpi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KpiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpiDetailPageRoutingModule {}
