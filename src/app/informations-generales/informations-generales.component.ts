import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-informations-generales',
  templateUrl: './informations-generales.component.html',
  styleUrls: ['./informations-generales.component.scss']
})
export class InformationsGeneralesComponent{

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private router:Router) {}
  gotomyprofile(){
    this.router.navigate(['myprofile/informations_generales'])
  };
  gotocompetences(){
    this.router.navigate(['myprofile/competences'])
  };
  gotocree(){
    this.router.navigate(['myprofile/offres_crees'])
  };
  gotocreer(){
    this.router.navigate(['myprofile/creer_offre'])
  };
  gotoeducation(){
    this.router.navigate(['myprofile/education'])
  };
  gotopostule(){
    this.router.navigate(['myprofile/applied'])
  };
  gotoexperience(){
    this.router.navigate(['myprofile/experience'])
  }

}
