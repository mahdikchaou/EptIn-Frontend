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
import {OfferComponent} from "./offer/offer.component";
import {ViewProfileComponent} from "./view-profile/view-profile.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home/offres',
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    children: [
      {
        path:'profiles',
        component:ProfilespageComponent,
        data: {
          title: 'People'
        },
      },
      {
        path:'offres',
        component:OffresComponent,
        data: {
          title: 'Offers'
        },
      },
      {
        path:'offer',
        component: OfferComponent,
      },
      {
        path:'profile',
        component: ViewProfileComponent
      }
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
    data: {
      title: 'My Profile'
    },
    children: [
      {
        path:'informations_generales',
        component:InformationsGeneralesComponent,
        data: {
          title: 'General Informations'
        },
      },
      {
        path:'experience',
        component:ExperienceComponent,
        data: {
          title: 'Experience'
        },
      },
      {
        path:'competences',
        component:CompetencesComponent,
        data: {
          title: 'Competences'
        },
      },
      {
        path:'offres_crees',
        component:CreeComponent,
        data: {
          title: 'Created Offers'
        },
      },
      {
        path:'creer_offre',
        component:CreerComponent,
        data: {
          title: 'Create an Offer'
        },
      },
      {
        path:'education',
        component:EducationComponent,
        data: {
          title: 'Education'
        },
      },
      {
        path:'applied',
        component:AppliedComponent,
        data: {
          title: 'Applied Offers'
        },
      },
    ],
  },


  {path: '**', redirectTo: 'offres'},
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
