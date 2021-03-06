import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { DataResolverService } from "../resolver/data-resolver.service";
const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: "../tab1/tab1.module#Tab1PageModule",
          },
          {
            path: "list-new/:id",
            loadChildren: () =>
              import("../list-new/list-new.module").then(
                (m) => m.ListNewPageModule
              ),
          },
          {
            path: "micro/:id",
            loadChildren: () =>
              import("../micro/micro.module").then((m) => m.MicroPageModule),
          },
          {
            path: "detail-new/:id",
            loadChildren: () =>
              import("../detail-new/detail-new.module").then(
                (m) => m.DetailNewPageModule
              ),
          },
          {
            path: "km360",
            loadChildren: () =>
              import("../km360/km360.module").then((m) => m.Km360PageModule),
          },
          {
            path: "iform",
            loadChildren: () =>
              import("../iform/iform.module").then((m) => m.IformPageModule),
          },
          {
            path: "iform",
            loadChildren: () =>
              import("../iform/iform.module").then((m) => m.IformPageModule),
          },
          {
            path: "pms",
            loadChildren: () =>
              import("../pms/pms.module").then((m) => m.PMSPageModule),
          },
          {
            path: "kpi-detail/:id",
            resolve: {
              special: DataResolverService,
            },
            loadChildren: () =>
              import("../kpi-detail/kpi-detail.module").then(
                (m) => m.KpiDetailPageModule
              ),
          },
          {
            path: "km-hr-list/:id",
            loadChildren: () =>
              import("../km-hr-list/km-hr-list.module").then(
                (m) => m.KmHrListPageModule
              ),
          },
          {
            path: "km-hr/:id",
            loadChildren: () =>
              import("../km-hr/km-hr.module").then((m) => m.KmHrPageModule),
          },
          {
            path: "product/:id",
            resolve: {
              special: DataResolverService,
            },
            loadChildren: () =>
              import("../product/product.module").then(
                (m) => m.ProductPageModule
              ),
          },
          {
            path: "km360list/:id",
            resolve: {
              special: DataResolverService,
            },
            loadChildren: () =>
              import("../km360list/km360list.module").then(
                (m) => m.Km360listPageModule
              ),
          },
          {
            path: "product-list/:id",
            resolve: {
              special: DataResolverService,
            },
            loadChildren: () =>
              import("../product-list/product-list.module").then(
                (m) => m.ProductListPageModule
              ),
          },
          {
            path: "km-hr-detail/:id",
            loadChildren: () =>
              import("../km-hr-detail/km-hr-detail.module").then(
                (m) => m.KmHrDetailPageModule
              ),
          },
          {
            path: "km360detail/:id",
            resolve: {
              special: DataResolverService,
            },
            loadChildren: () =>
              import("../km360detail/km360detail.module").then(
                (m) => m.Km360detailPageModule
              ),
          },
          {
            path: "micro-detail/:id",
            loadChildren: () =>
              import("../micro-detail/micro-detail.module").then(
                (m) => m.MicroDetailPageModule
              ),
          },
          {
            path: "km-hrdetail/:id",
            loadChildren: () =>
              import("../km-hrdetail/km-hrdetail.module").then(
                (m) => m.KmHrdetailPageModule
              ),
          },
        ],
      },

      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: "../tab2/tab2.module#Tab2PageModule",
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: "../tab3/tab3.module#Tab3PageModule",
          },
        ],
      },

      {
        path: "wallet",
        children: [
          {
            path: "",
            loadChildren: "../wallet/wallet.module#WalletPageModule",
          },
        ],
      },

      {
        path: "chat",
        children: [
          {
            path: "",
            loadChildren: "../chat/chat.module#ChatPageModule",
          },
          {
            path: "position-detail",
            loadChildren: () =>
              import("../position-detail/position-detail.module").then(
                (m) => m.PositionDetailPageModule
              ),
          },
          {
            path: "profile-st/:id",
            loadChildren: () =>
              import("../profile-st/profile-st.module").then(
                (m) => m.ProfileStPageModule
              ),
          },
          {
            path: "chat-group-room/:id",
            loadChildren: () =>
              import("../chat-group-room/chat-group-room.module").then(
                (m) => m.ChatGroupRoomPageModule
              ),
          },
          {
            path: "detail-staff/:id_1/:id_2/:id_3",
            loadChildren: () =>
              import("../detail-staff/detail-staff.module").then(
                (m) => m.DetailStaffPageModule
              ),
          },
          {
            path: "em-company",
            loadChildren: () =>
              import("../em-company/em-company.module").then(
                (m) => m.EmCompanyPageModule
              ),
          },
        ],
      },
      {
        path: "time",
        children: [
          {
            path: "",
            loadChildren:
              "../time-attendance/time-attendance.module#TimeAttendancePageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabss/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabss/tabs/tab1",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
