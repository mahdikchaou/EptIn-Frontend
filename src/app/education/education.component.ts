import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EducationService} from "./education.service";
import {education} from "../models/education";
import {userIdService} from "../user-id.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent{
  message!:string;
  education!:education

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private router:Router, private educationService:EducationService, private userId:userIdService) {}

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
  ngOnInit(): void{
    this.userId.currentMessage.subscribe(message => this.message = message);
    this.educationService.getEducation(this.message).subscribe(data2=>{
      this.education=data2;
    });
  }

}
