import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DataResolverService } from '../resolver/data-resolver.service';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },{
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },{
        path:'chat',
        children: [
          {
            path: '',
            loadChildren: '../chat/chat.module#ChatPageModule'
          }
        ]
      },{
        path:'time',
        children:[
          {
            path:'',
            loadChildren: '../time-attendance/time-attendance.module#TimeAttendancePageModule'
          }
        ]
      },{
        path:'list-new/:id',
        resolve:{
          special: DataResolverService
        },
        children:[
          {
            path: '',
  
            loadChildren: () => import('../list-new/list-new.module').then( m => m.ListNewPageModule)
          }
        ]
      },{
        path:'micro/:id',
        resolve:{
          special: DataResolverService
        },
        children:[
          {
            path: '',
    
            loadChildren: () => import('../micro/micro.module').then( m => m.MicroPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabss/tabs/tab1',
        pathMatch: 'full'
      }


    ]
  },
  {
    path: '',
    redirectTo: '/tabss/tabs/tab1',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
