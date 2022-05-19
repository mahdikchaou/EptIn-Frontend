import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CreeService} from "./cree.service";
import {AuthenticationService} from "../_services";
import {Offre} from "../models/offre";
import {DataService} from "../data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cree',
  templateUrl: './cree.component.html',
  styleUrls: ['./cree.component.scss']
})
export class CreeComponent{
  currentUser = this.authService.currentUserValue;
  offers!:Offre[];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private httpClient:HttpClient, private router:Router, private cree:CreeService, private authService: AuthenticationService) {}

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
  };
  deleteOffer(id:string){
    let url="http://localhost:9090/api/offres/"+id;
    this.httpClient.delete(url).subscribe(data =>{
      // alert("Task successfully done!");
    })
    //window.location.reload();

  }
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
    this.deleteOffer(elementId)
  };
  ngOnInit():void{
    this.cree.getUserOffers(this.currentUser.id.toString()).subscribe(data2=>{
      this.offers=data2;
    });
  }

}
