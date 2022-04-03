import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {experience} from "../models/experience";
import {ExperienceService} from "./experience.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public experiencef!:FormGroup
  experience!:experience[]
  currentUser = this.authService.currentUserValue;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private authService: AuthenticationService, private formBuilder:FormBuilder, private router:Router, private experienceService: ExperienceService,private HttpClient: HttpClient ) {}
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
    this.experienceService.getExperience(this.currentUser.userId.toString()).subscribe(data2=>{
      this.experience=data2;
    });
    this.experiencef=this.formBuilder.group({
      companyName:[''],
      city:[''],
      country:[''],
      employmentType:[''],
      jobTitle:[''],
      comment:[''],
      userId:[this.currentUser.userId],
      id:[]
    })
  }

  addExperience(){
    this.HttpClient.post<any>("http://localhost:3000/experience", this.experiencef.value)
      .subscribe(res=>{
        alert("Signup Successful");
        this.experiencef.reset();
      }, err=>{
        alert("Something went wrong, try again")
      })
  }

}
