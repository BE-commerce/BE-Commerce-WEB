import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/auth/sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './layout/layouts/admin/admin.component';
import { UserComponent } from './layout/layouts/user/user.component';
import { HomeComponent } from './main/home/home.component';
import { AuthGuard } from './_guards/auth/auth.guard';

const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: '' },


  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "login", component: SignInComponent },
      { path: "register", component: SignUpComponent },
      { path: 'store', loadChildren: () => import('../app/modules/store/store.module').then(m => m.StoreModule) },

    ]
  },

  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: LayoutComponent,
  //   children: [
  //     { path: 'delivery', loadChildren: () => import('app/modules/delivery/delivery.module').then(m => m.DeliveryModule) },
  //   ]
  // },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      // { path: "example1", component: Example1Component },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
