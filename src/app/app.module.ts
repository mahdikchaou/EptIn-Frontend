import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
// Import routing module
import {AppRoutingModule} from './app-routing.module';
// Import app component
import {AppComponent} from './app.component';
// Import containers
import {DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent,} from './containers';

import {
  AccordionModule,
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import {IconModule, IconSetService} from '@coreui/icons-angular';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {ProfilespageComponent} from './profilespage/profilespage.component';
import {EducationComponent} from './education/education.component';
import {CompetencesComponent} from './competences/competences.component';
import {ExperienceComponent} from './experience/experience.component';
import {AppliedComponent} from './applied/applied.component'
import {CreeComponent} from './cree/cree.component';
import {CreerComponent} from './creer/creer.component';
import {OffresComponent} from './offres/offres.component';
import {HttpClientModule} from "@angular/common/http";
import {InformationsGeneralesComponent} from './informations-generales/informations-generales.component';
import {OfferComponent} from './offer/offer.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {OffresService} from "./offres/offres.service";
import {ViewProfileComponent} from './view-profile/view-profile.component';
//import {fakeBackendProvider} from "./helpers/fake-backend";
import {httpInterceptorProviders} from "./helpers/interceptors/httpInterceptorProvider";
import {Page404Component} from "./page404/page404.component";
import { AdminComponent } from './admin/admin.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FiltermultiPipe } from './filtermulti.pipe';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, LoginComponent, RegisterComponent, MyprofileComponent,
    ProfilespageComponent, EducationComponent, CompetencesComponent, ExperienceComponent,
    AppliedComponent, CreeComponent, CreerComponent, OffresComponent, InformationsGeneralesComponent,
    OfferComponent, ViewProfileComponent, Page404Component, AdminComponent,  FiltermultiPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    TableModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
    AccordionModule,
  ],
  providers: [
    httpInterceptorProviders,
    //fakeBackendProvider,
    OffresService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
