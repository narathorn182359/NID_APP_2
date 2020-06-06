import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileStPageRoutingModule } from './profile-st-routing.module';

import { ProfileStPage } from './profile-st.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileStPageRoutingModule
  ],
  declarations: [ProfileStPage]
})
export class ProfileStPageModule {}
