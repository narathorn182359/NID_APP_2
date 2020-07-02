import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmHrdetailPage } from './km-hrdetail.page';

const routes: Routes = [
  {
    path: '',
    component: KmHrdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KmHrdetailPageRoutingModule {}
