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
import {AuthGuard} from "./helpers/auth.guard";
import {Role} from "./models/role";
import {Page404Component} from "./page404/page404.component";
import {AdminComponent} from "./admin/admin.component";



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
    canActivate: [AuthGuard],
    data: {roles: [Role.STUDENT, Role.EX_STUDENT]},
    component: DefaultLayoutComponent,
    children: [
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
        data: {roles: [Role.ADMIN]},},
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
        path:'offer/:id',
        component: OfferComponent,
      },
      {
        path:'profile',
        component: ViewProfileComponent
      },
    ]
  },

  {path: 'error-404', component: Page404Component},
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
    canActivate: [AuthGuard],
    data: {roles: [Role.STUDENT, Role.EX_STUDENT]},
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
          title: 'Skills and Certifications'
        },
      },
      {
        path:'offres_crees',
        component:CreeComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.EX_STUDENT]},
      },
      {
        path:'creer_offre',
        component:CreerComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.EX_STUDENT]},
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
