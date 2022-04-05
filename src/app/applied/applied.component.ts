import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Offre} from "../models/offre";
import{candidature} from "../models/candidature";
import {AppliedService} from "./applied.service";
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-postule',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.scss']
})
export class AppliedComponent{
  candidature!:candidature[];
  offers:Offre[]=[];
  currentUser = this.authService.currentUserValue;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private authService:AuthenticationService , private appliedService: AppliedService ,private router:Router) {}
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

  ngOnInit():void{
    this.appliedService.getCandidatures(this.currentUser.userId.toString()).subscribe(data1 => {
      this.candidature = data1;
      for (var c of this.candidature){
        this.appliedService.getUserAppliedOffer(c.offerId.toString()).subscribe(data2=>{
          var l= this.offers.push(data2);
        })
      }
    });
  }
}
