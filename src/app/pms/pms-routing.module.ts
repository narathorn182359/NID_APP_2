import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMSPage } from './pms.page';

const routes: Routes = [
  {
    path: '',
    component: PMSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMSPageRoutingModule {}
