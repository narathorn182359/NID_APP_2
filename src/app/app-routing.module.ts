import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabss', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'settingstaff',
    loadChildren: () => import('./settingstaff/settingstaff.module').then( m => m.SettingstaffPageModule)
  },
  {
    path: 'addstaff',
    loadChildren: () => import('./addstaff/addstaff.module').then( m => m.AddstaffPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'e-learning',
    loadChildren: () => import('./e-learning/e-learning.module').then( m => m.ELearningPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'corevalues',
    loadChildren: () => import('./corevalues/corevalues.module').then( m => m.CorevaluesPageModule)
  },
  {
    path: 'competency',
    loadChildren: () => import('./competency/competency.module').then( m => m.CompetencyPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'privileges',
    loadChildren: () => import('./privileges/privileges.module').then( m => m.PrivilegesPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'modal-benefits',
    loadChildren: () => import('./modal-benefits/modal-benefits.module').then( m => m.ModalBenefitsPageModule)
  },
  {
    path: 'modal-new',
    loadChildren: () => import('./modal-new/modal-new.module').then( m => m.ModalNewPageModule)
  },
  {
    path: 'alert-daily',
    loadChildren: () => import('./alert-daily/alert-daily.module').then( m => m.AlertDailyPageModule)
  },
  {
    path: 'chat-with-hr',
    loadChildren: () => import('./chat-with-hr/chat-with-hr.module').then( m => m.ChatWithHrPageModule)
  },
  {
    path: 'create-group-chat',
    loadChildren: () => import('./create-group-chat/create-group-chat.module').then( m => m.CreateGroupChatPageModule)
  },
  {
    path: 'setting-chat-group',
    loadChildren: () => import('./setting-chat-group/setting-chat-group.module').then( m => m.SettingChatGroupPageModule)
  },  {
    path: 'addstafftochat',
    loadChildren: () => import('./addstafftochat/addstafftochat.module').then( m => m.AddstafftochatPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
