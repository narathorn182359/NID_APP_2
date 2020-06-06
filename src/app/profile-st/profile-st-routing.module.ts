import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileStPage } from './profile-st.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileStPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileStPageRoutingModule {}
