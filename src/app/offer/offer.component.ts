import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import{OfferService} from "./offer.service";
import {Offre} from "../models/offre";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
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
  offer!:Offre;
  constructor(private data:DataService, private offerService:OfferService) { }
  message!:string;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=>this.message=message);
    this.offerService.getOfferList(this.message).subscribe(data1 => {
      this.offer = data1;
    });
  }


}
