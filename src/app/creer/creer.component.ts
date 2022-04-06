import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder} from "@angular/forms"
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../_services";



@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.scss']
})
export class CreerComponent{
  public createOfferForm !: FormGroup;
  items = [
    {name:'sysco'},
    {name:'sysi'},
    {name:'eges'},
    {name: 'aerospace engineering'},
    {name: 'automobile engineering'},
    {name: 'civil engineering'},
    {name: 'energy engineering'},
    {name: 'mechanical engineering'},
    {name: 'industrial engineering'},
    {name: 'nuclear engineering'},
    {name: 'hydraulic engineering'},
    {name: 'computer engineering'},
    {name: 'electrical engineering'},
    {name: 'telecommunication engineering'},
    {name: 'engineering management'},

  ];
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  currentUser = this.authService.currentUserValue;

  constructor(private authService: AuthenticationService,private formBuilder: FormBuilder, private http:HttpClient,private router:Router) {}
  ngOnInit(): void{
    this.createOfferForm=this.formBuilder.group({
      field:[''],
      name:[''],
      authority:[''],
      type:[''],
      comment:[''],
      country:[''],
      city:[''],
      phoneNumber:[''],
      email:[''],
      startDate:[''],
      endDate:[''],
      exstudentId:[this.currentUser.id],
    })
  }
  addNewOffre(){
    this.http.post<any>("http://localhost:9090/api/offres", this.createOfferForm.value)
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
