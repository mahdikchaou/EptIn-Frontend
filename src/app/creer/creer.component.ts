import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.scss']
})
export class CreerComponent{



  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private router:Router) {}
  gotomyprofile(){
    this.router.navigate(['informations_generales'])
  };
  gotocompetences(){
    this.router.navigate(['competences'])
  };
  gotocree(){
    this.router.navigate(['offres_crees'])
  };
  gotocreer(){
    this.router.navigate(['creer_offre'])
  };
  gotoeducation(){
    this.router.navigate(['education'])
  };
  gotopostule(){
    this.router.navigate(['postules'])
  };
  gotoexperience(){
    this.router.navigate(['experience'])
  }

}
