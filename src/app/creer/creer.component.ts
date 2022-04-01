import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder} from "@angular/forms"
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.scss']
})
export class CreerComponent{
  public createOfferForm !: FormGroup;
  items = [
    {name: 'Aerospace Engineering'},
    {name: 'Automobile Engineering'},
    {name: 'Civil Engineering'},
    {name: 'Energy engineering'},
    {name: 'Mechanical Engineering'},
    {name: 'Industrial Engineering'},
    {name: 'Nuclear Engineering'},
    {name: 'Hydraulic Engineering'},
    {name: 'Computer Engineering'},
    {name: 'Electrical Engineering'},
    {name: 'Telecommunication Engineering'},
    {name: 'engineering Management'},

  ];
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router:Router) {}
  ngOnInit(): void{
    this.createOfferForm=this.formBuilder.group({
      field:[''],
      name:[''],
      authority:[''],
      type:[''],
      comment:[''],
      country:[''],
      city:[''],
      authorityPhoneNumber:[],
      authorityEmail:[''],
      startDate:[''],
      endDate:[''],
    })
  }
  addNewOffre(){
    this.http.post<any>("http://localhost:3000/offres", this.createOfferForm.value)
      .subscribe(res=>{
        alert("creation good");
        this.createOfferForm.reset();
      }, err=>{
        alert("Something went wrong, try again")
      })
  };
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
