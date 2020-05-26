import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBenefitsPage } from './modal-benefits.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBenefitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBenefitsPageRoutingModule {}
