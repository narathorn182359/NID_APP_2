import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Km360detailPage } from './km360detail.page';

const routes: Routes = [
  {
    path: '',
    component: Km360detailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Km360detailPageRoutingModule {}
