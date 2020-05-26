import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { Km360PageRoutingModule } from './km360-routing.module';

import { Km360Page } from './km360.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    Km360PageRoutingModule
  ],
  declarations: [Km360Page]
})
export class Km360PageModule {}
