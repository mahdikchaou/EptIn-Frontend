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
    {id: 1, name: 'Aerospace Engineering'},
    {id: 2, name: 'Automobile Engineering'},
    {id: 3, name: 'Civil Engineering'},
    {id: 4, name: 'Energy engineering'},
    {id: 5, name: 'Mechanical Engineering'},
    {id: 6, name: 'Industrial Engineering'},
    {id: 7, name: 'Nuclear Engineering'},
    {id: 8, name: 'Hydraulic Engineering'},
    {id: 9, name: 'Computer Engineering'},
    {id: 10, name: 'Electrical Engineering'},
    {id: 11, name: 'Telecommunication Engineering'},
    {id: 12, name: 'engineering Management'},

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
