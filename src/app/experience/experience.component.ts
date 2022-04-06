import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {experience} from "../models/experience";
import {ExperienceService} from "./experience.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../_services";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  closeResult = '';

  public experiencef!:FormGroup
  experience!:experience[]
  currentUser = this.authService.currentUserValue;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private authService: AuthenticationService, private modalService: NgbModal, private formBuilder:FormBuilder, private router:Router, private experienceService: ExperienceService,private HttpClient: HttpClient ) {}
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
  ngOnInit():void{
    this.experienceService.getExperience(this.currentUser.id.toString()).subscribe(data2=>{
      this.experience=data2;
    });
    this.experiencef=this.formBuilder.group({
      companyName:[''],
      city:[''],
      country:[''],
      employmentType:[''],
      jobTitle:[''],
      comment:[''],
      userId:this.currentUser.id,
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
