import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetencyPage } from './competency.page';

const routes: Routes = [
  {
    path: '',
    component: CompetencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetencyPageRoutingModule {}
