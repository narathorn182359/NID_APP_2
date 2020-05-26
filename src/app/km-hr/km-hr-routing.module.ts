import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmHrPage } from './km-hr.page';

const routes: Routes = [
  {
    path: '',
    component: KmHrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KmHrPageRoutingModule {}
