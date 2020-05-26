import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KmHrListPageRoutingModule } from './km-hr-list-routing.module';

import { KmHrListPage } from './km-hr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KmHrListPageRoutingModule
  ],
  declarations: [KmHrListPage]
})
export class KmHrListPageModule {}
