import {Component, OnInit} from '@angular/core';
import {OffresService} from "./offres.service";
import {Offre} from "../models/offre";
import {Router} from "@angular/router";
import {DataServiceOffer} from "../data-offer.service";
import {FilterService} from "../data-filter.service";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  offres: Offre[] = [];
  filterArray: object[] = [{type: ""}, {field: ""}];

  constructor(private data: DataServiceOffer, private offresService: OffresService, private router: Router, private filterService: FilterService) {
    this.filterService.currentMessage.subscribe(value => {
      this.filterArray = value;
    })
  }

  message!: string;

  ngOnInit(): void {
    this.offresService.getOffersList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.offres = data;
    });
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    this.data.changeMessage(elementId);
  };

  gotoOffer() {
    this.router.navigate(['home/offer'])
  }
}
