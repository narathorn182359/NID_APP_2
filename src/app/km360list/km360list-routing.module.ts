import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Km360listPage } from './km360list.page';

const routes: Routes = [
  {
    path: '',
    component: Km360listPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Km360listPageRoutingModule {}
