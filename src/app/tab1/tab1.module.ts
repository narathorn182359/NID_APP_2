import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';
import { AlertDailyPageModule } from '../alert-daily/alert-daily.module';
import { AttendancePageModule } from '../attendance/attendance.module';
import { PMSPageModule } from '../pms/pms.module';
import { ChatWithHrPageModule } from '../chat-with-hr/chat-with-hr.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    AlertDailyPageModule,
    AttendancePageModule,
    PMSPageModule,
    ChatWithHrPageModule
   
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
