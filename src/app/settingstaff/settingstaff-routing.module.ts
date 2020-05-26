import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingstaffPage } from './settingstaff.page';

const routes: Routes = [
  {
    path: '',
    component: SettingstaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingstaffPageRoutingModule {}
