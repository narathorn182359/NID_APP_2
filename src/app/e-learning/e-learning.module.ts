import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELearningPageRoutingModule } from './e-learning-routing.module';

import { ELearningPage } from './e-learning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELearningPageRoutingModule
  ],
  declarations: [ELearningPage]
})
export class ELearningPageModule {}
