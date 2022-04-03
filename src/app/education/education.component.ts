import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EducationService} from "./education.service";
import {education} from "../models/education";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../_services";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent{
  public EducationForm !: FormGroup;
  education!:education;
  currentUser = this.authService.currentUserValue;


  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private formBuilder:FormBuilder ,private HttpClient:HttpClient ,private authService: AuthenticationService, private router:Router, private educationService:EducationService) {}

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
    this.educationService.getEducation(this.currentUser.userId.toString()).subscribe(data2=>{
      this.education=data2;
    });
    this.EducationForm = this.formBuilder.group({
      admissionDate:[''],
      graduationDate:[''],
      prepa:[''],
      comment:[''],
      option:[''],
      masterField:[''],
      masterUniversity:[''],
      phdField:[''],
      phdUniversity:[''],
      pfeField:[''],
      pfeUniversity:[''],
      userId:[this.currentUser.userId]
    })
  }
  updateEducation() {
    let params1=new HttpParams();
    params1=params1.append('userId',this.currentUser.userId);

    this.HttpClient.put<any>("http://localhost:3000/education", this.EducationForm.value, {params:params1} )
      .subscribe(res => {
        alert("good")
      }, err => {
        this.HttpClient.post<any>("http://localhost:3000/education", this.EducationForm.value )
          .subscribe(res => {
            alert("good")
          }, err => {
            alert("Something went wrong, try again")
          })
      }
      )
  }

}
