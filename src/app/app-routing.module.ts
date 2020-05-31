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
    path: 'km360list/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./km360list/km360list.module').then( m => m.Km360listPageModule)
  },
  {
    path: 'km360detail/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./km360detail/km360detail.module').then( m => m.Km360detailPageModule)
  },
  {
    path: 'privileges',
    loadChildren: () => import('./privileges/privileges.module').then( m => m.PrivilegesPageModule)
  },{
        path:'micro-detail/:id',
        resolve:{
          special: DataResolverService
        },
        loadChildren: () => import('./micro-detail/micro-detail.module').then(m => m.MicroDetailPageModule)
      },
  {
    path: 'product/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-list/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'km-hr/:id',
    loadChildren: () => import('./km-hr/km-hr.module').then( m => m.KmHrPageModule)
  },
  {
    path: 'km-hr-list/:id',
    loadChildren: () => import('./km-hr-list/km-hr-list.module').then( m => m.KmHrListPageModule)
  },
  {
    path: 'km-hr-detail/:id',
    loadChildren: () => import('./km-hr-detail/km-hr-detail.module').then( m => m.KmHrDetailPageModule)
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
    path: 'detail-staff',
    loadChildren: () => import('./detail-staff/detail-staff.module').then( m => m.DetailStaffPageModule)
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
