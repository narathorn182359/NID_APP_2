import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetencyPageRoutingModule } from './competency-routing.module';

import { CompetencyPage } from './competency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetencyPageRoutingModule
  ],
  declarations: [CompetencyPage]
})
export class CompetencyPageModule {}
