import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmHrListPage } from './km-hr-list.page';

const routes: Routes = [
  {
    path: '',
    component: KmHrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KmHrListPageRoutingModule {}
