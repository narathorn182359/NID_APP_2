import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeAttendancePage } from './time-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: TimeAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeAttendancePageRoutingModule {}
