import { Component, OnInit } from '@angular/core';
import {OffresService} from "./offres.service";
import {Offre} from "../models/offre";
import {stringify} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  offres: Offre[] = [];
  fieldSelected!:string;

  constructor(private offresService: OffresService, private router:Router) { }

  ngOnInit(): void {
    this.offresService.getOffersList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.offres = data;
    });
  }
  gotoOffer(){
    this.router.navigate(['home/offer'])
  }

}
