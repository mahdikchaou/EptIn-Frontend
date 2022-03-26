import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-postule',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.scss']
})
export class AppliedComponent{

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
