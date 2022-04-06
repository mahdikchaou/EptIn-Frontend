import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import{ViewProfileService} from "./view-profile.service";
import{Informationsgenerales} from "../models/Informationsgenerales";
import {education} from "../models/education";
import{experience} from "../models/experience";
import{Skill} from "../models/skill";
import{Certification} from "../models/certification";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  items = [1, 2, 3, 4];

  informationsGenerales!:Informationsgenerales;
  education!:education[];
  experience!: experience[];
  certification!: Certification[];
  skill!: Skill[];
  constructor(private data:DataService, private viewProfileService:ViewProfileService) { }
  message:string="";
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=>this.message=message);
    this.viewProfileService.getInformationsGenerales(this.message).subscribe(data1 => {
      this.informationsGenerales = data1;
    });
    this.viewProfileService.getEducation(this.message).subscribe(data2=>{
      this.education=data2;
    });
    this.viewProfileService.getExperience(this.message).subscribe(data2=>{
      this.experience=data2;
    });
    this.viewProfileService.getCertifications(this.message).subscribe(data2=>{
      this.certification=data2;
    })
    this.viewProfileService.getSkills(this.message).subscribe(data2=>{
      this.skill=data2;
    })
  }

}
