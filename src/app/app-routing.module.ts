import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {ProfilespageComponent} from "./profilespage/profilespage.component";
import {ExperienceComponent} from "./experience/experience.component";
import {CompetencesComponent} from "./competences/competences.component";
import {CreeComponent} from "./cree/cree.component";
import {CreerComponent} from "./creer/creer.component";
import {EducationComponent} from "./education/education.component";
import {AppliedComponent} from "./applied/applied.component";

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
    path:'informations_generales',
    component:MyprofileComponent,
    data: {
      title: 'myprofile Page'
    },
  },
  {
    path:'experience',
    component:ExperienceComponent,
    data: {
      title: 'experience Page'
    },
  },
  {
    path:'competences',
    component:CompetencesComponent,
    data: {
      title: 'competences Page'
    },
  },
  {
    path:'offres_crees',
    component:CreeComponent,
    data: {
      title: 'Cree Page'
    },
  },
  {
    path:'creer_offre',
    component:CreerComponent,
    data: {
      title: 'Creer Page'
    },
  },
  {
    path:'education',
    component:EducationComponent,
    data: {
      title: 'education Page'
    },
  },
  {
    path:'applied',
    component:AppliedComponent,
    data: {
      title: 'applied Page'
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
