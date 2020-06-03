import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWithHrPageRoutingModule } from './chat-with-hr-routing.module';

import { ChatWithHrPage } from './chat-with-hr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatWithHrPageRoutingModule
  ],
  declarations: [ChatWithHrPage]
})
export class ChatWithHrPageModule {}
