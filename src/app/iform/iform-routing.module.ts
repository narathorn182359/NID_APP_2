import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IformPage } from './iform.page';

const routes: Routes = [
  {
    path: '',
    component: IformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IformPageRoutingModule {}
