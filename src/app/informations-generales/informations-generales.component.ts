import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Informationsgenerales} from "../models/Informationsgenerales";
import {InformationsGeneralesService} from "./informations-generales.service";

@Component({
  selector: 'app-informations-generales',
  templateUrl: './informations-generales.component.html',
  styleUrls: ['./informations-generales.component.scss']
})
export class InformationsGeneralesComponent implements OnInit{
  items = [
    {id:1, name: 'Aerospace Engineering'},
    {id:2, name: 'Automobile Engineering'},
    {name: 'Civil Engineering'},
    {name: 'Energy engineering'},
    {name: 'Mechanical Engineering'},
    {name: 'Industrial Engineering'},
    {name: 'Nuclear Engineering'},
    {name: 'Hydraulic Engineering'},
    {name: 'Computer Engineering'},
    {name: 'Electrical Engineering'},
    {name: 'Telecommunication Engineering'},
    {name: 'Engineering Management'},
  ];
  selected=[
    {name: 'Aerospace Engineering'},
    {name: 'Automobile Engineering'},  ];
  infogn: Informationsgenerales[]=[];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private router:Router, private infognservice: InformationsGeneralesService) {}
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

  ngOnInit(): void {
    this.infognservice.getInformationsGeneralesList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.infogn = data;
    });
  }

}
