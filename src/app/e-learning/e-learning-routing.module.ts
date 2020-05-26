import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ELearningPage } from './e-learning.page';

const routes: Routes = [
  {
    path: '',
    component: ELearningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELearningPageRoutingModule {}
