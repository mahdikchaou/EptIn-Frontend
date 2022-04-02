import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Informationsgenerales} from "../models/Informationsgenerales";
import {InformationsGeneralesService} from "./informations-generales.service";
import {userIdService} from "../user-id.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-informations-generales',
  templateUrl: './informations-generales.component.html',
  styleUrls: ['./informations-generales.component.scss']
})
export class InformationsGeneralesComponent implements OnInit{
  message!:string;
  public infoGnForm !: FormGroup;

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
  infogn!: Informationsgenerales;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private formBuilder: FormBuilder, private router:Router, private infognservice: InformationsGeneralesService,private userId: userIdService, private HttpClient:HttpClient,) {}
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
    this.userId.currentMessage.subscribe(message => this.message = message);
    this.infognservice.getInformationsGenerales(this.message).subscribe(data1 => {
      this.infogn = data1;
    });
    this.infoGnForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      gender:[''],
      birthday:[''],
      country:[''],
      city:[''],
      phoneNumber:[],
      email:[''],
      password:[''],
      field:[''],
    })

  }
  updateInfoGn(){
    let   url:string ="http://localhost:3000/user/"+this.message;
    this.HttpClient.put<any>(url, this.infoGnForm.value)
      .subscribe(res=>{
        alert("Signup Successful");
      }, err=>{
        alert("Something went wrong, try again")
      })
  }

}
