import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrivilegesPageRoutingModule } from './privileges-routing.module';
import { PrivilegesPage } from './privileges.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivilegesPageRoutingModule,
  
  ],
  declarations: [PrivilegesPage]
})
export class PrivilegesPageModule {}
