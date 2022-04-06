import { Component, OnInit } from '@angular/core';
import{OfferService} from "./offer.service";
import {Offre} from "../models/offre";
import{HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../_services";
import {DataServiceOffer} from "../data-offer.service";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
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
  offer!:Offre;
  constructor(private authService: AuthenticationService, private HttpClient: HttpClient, private data:DataServiceOffer, private offerService:OfferService) { }
  message!:string;
  currentUser = this.authService.currentUserValue;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=>this.message=message);
    this.offerService.getOffer(this.message).subscribe(data1 => {
      this.offer = data1;
    });
  }
  applyToOffer(offerId:string){
    this.HttpClient.post<any>("http://localhost:3000/candidature",
      {
        userId:this.currentUser.id,
        offerId:offerId,
      })
      .subscribe(res => {
        alert("good")
      }, err => {
        alert("Something went wrong, try again")
      })
  }
  toggle(event: Event):void{
      this.applyToOffer(this.message)
  };


}
