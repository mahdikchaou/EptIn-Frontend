import { Component, OnInit } from '@angular/core';
import{OfferService} from "./offer.service";
import {Offre} from "../models/offre";
import{HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../_services";
import {DataServiceOffer} from "../data-offer.service";
import {ActivatedRoute} from "@angular/router";

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
  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private HttpClient: HttpClient, private data:DataServiceOffer, private offerService:OfferService) { }
id!:number;
  currentUser = this.authService.currentUserValue;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getOffer(this.id).subscribe(data1 => {
      this.offer = data1;
    });
  }
  toggle(event: Event):void{
    this.offerService.applyToOffer(this.id.toString()).subscribe(data=>{
      alert("application done!")
    },error => {
      alert("something wrong, try again")
    })
  }


}
