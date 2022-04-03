import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CompetencesService} from "./competences.service";
import {Certification} from "../models/certification";
import {Skill} from "../models/skill";
import {AuthenticationService} from "../_services";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  certification!: Certification[];
  skill!: Skill[];
  currentUser = this.authService.currentUserValue;
  public skillForm!: FormGroup
  public certificationForm!: FormGroup


  constructor(private HttpClient: HttpClient, private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router, private competencesService: CompetencesService) {
  }

  ngOnInit(): void {

    this.competencesService.getCertifications(this.currentUser.userId.toString()).subscribe(data2 => {
      this.certification = data2;
    })
    this.competencesService.getSkills(this.currentUser.userId.toString()).subscribe(data2 => {
      this.skill = data2;
    })
    this.certificationForm = this.formBuilder.group({
      name: [''],
      field: [''],
      authority: [''],
      issueDate: [''],
      expirationDate: [''],
      comment: [''],
      userId: [this.currentUser.userId],
      id: []
    })
    this.skillForm = this.formBuilder.group({
      name: [''],
      comment: [''],
      userId: [this.currentUser.userId],
      id: []
    })
  }

  gotomyprofile() {
    this.router.navigate(['myprofile/informations_generales'])
  };

  gotocompetences() {
    this.router.navigate(['myprofile/competences'])
  };

  gotocree() {
    this.router.navigate(['myprofile/offres_crees'])
  };

  gotocreer() {
    this.router.navigate(['myprofile/creer_offre'])
  };

  gotoeducation() {
    this.router.navigate(['myprofile/education'])
  };

  gotopostule() {
    this.router.navigate(['myprofile/applied'])
  };

  gotoexperience() {
    this.router.navigate(['myprofile/experience'])

  }

  addCertification() {
    this.HttpClient.post<any>("http://localhost:3000/certification", this.certificationForm.value)
      .subscribe(res => {
        this.certificationForm.reset();
        alert("good")
      }, err => {
        alert("Something went wrong, try again")
      })
  }

  addSkill() {
    this.HttpClient.post<any>("http://localhost:3000/skill", this.skillForm.value)
      .subscribe(res => {
        this.certificationForm.reset();
      }, err => {
        alert("Something went wrong, try again")
      })
  }


}
