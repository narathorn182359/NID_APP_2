import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Km360Page } from './km360.page';

const routes: Routes = [
  {
    path: '',
    component: Km360Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Km360PageRoutingModule {}
