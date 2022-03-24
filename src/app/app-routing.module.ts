import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {ProfilespageComponent} from "./profilespage/profilespage.component";

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: []
  },
  {
    path:'login',
    component:LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path:'register',
    component:RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path:'myprofile',
    component:MyprofileComponent,
    data: {
      title: 'myprofile Page'
    },
  },
  {
    path:'profiles',
    component:ProfilespageComponent,
    data: {
      title: 'profilespage Page'
    },
  },



  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
