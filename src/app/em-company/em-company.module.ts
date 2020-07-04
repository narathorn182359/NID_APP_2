import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { EmCompanyPageRoutingModule } from './em-company-routing.module';

import { EmCompanyPage } from './em-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmCompanyPageRoutingModule
  ],
  declarations: [EmCompanyPage]
})
export class EmCompanyPageModule {}
