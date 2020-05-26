import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBenefitsPageRoutingModule } from './modal-benefits-routing.module';

import { ModalBenefitsPage } from './modal-benefits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBenefitsPageRoutingModule
  ],
  declarations: [ModalBenefitsPage
    
  ]
})
export class ModalBenefitsPageModule {}
