import {Component, Input, NgModule, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})


export class MyprofileComponent {


  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  private m!: string;

  constructor(private router:Router) {}
  ngOnInit():void{
  }
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
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
     this.m=elementId;
   };


}
