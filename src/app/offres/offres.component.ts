import { Component, OnInit } from '@angular/core';
import {OffresService} from "./offres.service";
import {Offre} from "../models/offre";
import {stringify} from "@angular/compiler/src/util";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  offres: Offre[] = [];
  constructor(private data:DataService,private offresService: OffresService, private router:Router) { }
  message!:string;
  ngOnInit(): void {
    this.offresService.getOffersList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.offres = data;
    });
    this.data.currentMessage.subscribe(message=>this.message=message)
  }
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
    this.data.changeMessage(elementId);
  };
  gotoOffer(){
    this.router.navigate(['home/offer'])
  }
}
