import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CompetencesService} from "./competences.service";
import {Certification} from "../models/certification";
import {Skill} from "../models/skill";
import {userIdService} from "../user-id.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit{
  message!:string;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  private certification!: Certification[];
  private skill!: Skill[];
  constructor(private router:Router, private competencesService: CompetencesService,private userId: userIdService) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    this.userId.currentMessage.subscribe(message => this.message = message);

    this.competencesService.getCertifications(this.message).subscribe(data2=>{
      this.certification=data2;
    })
    this.competencesService.getSkills(this.message).subscribe(data2=>{
      this.skill=data2;
    })
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

}
