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
import {OffresComponent} from "./offres/offres.component";
import {InformationsGeneralesComponent} from "./informations-generales/informations-generales.component";
import {stringify} from "@angular/compiler/src/util";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offres',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path:'profiles',
        component:ProfilespageComponent,
      },
      {
        path:'offres',
        component:OffresComponent,
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'myprofile',
    redirectTo:'myprofile/informations_generales',
  },
  {
    path:'myprofile',
    component:MyprofileComponent,
    children: [
      {
        path:'informations_generales',
        component:InformationsGeneralesComponent,
      },
      {
        path:'experience',
        component:ExperienceComponent,
      },
      {
        path:'competences',
        component:CompetencesComponent,
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

    ],
  },


  {path: '**', redirectTo: 'offres'}
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
