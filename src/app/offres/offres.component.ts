import { Component, OnInit } from '@angular/core';
import {OffresService} from "./offres.service";
import {Offre} from "../models/offre";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  offres: Offre[] = [];

  constructor(private offresService: OffresService) { }

  ngOnInit(): void {
    this.offresService.getOffersList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.offres = data;
    });
  }

}
