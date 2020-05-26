import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDailyPage } from './alert-daily.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDailyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDailyPageRoutingModule {}
