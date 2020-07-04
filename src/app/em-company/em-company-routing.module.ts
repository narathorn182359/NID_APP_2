import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmCompanyPage } from './em-company.page';

const routes: Routes = [
  {
    path: '',
    component: EmCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmCompanyPageRoutingModule {}
