import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeAttendancePageRoutingModule } from './time-attendance-routing.module';

import { TimeAttendancePage } from './time-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeAttendancePageRoutingModule
  ],
  declarations: [TimeAttendancePage]
})
export class TimeAttendancePageModule {}
