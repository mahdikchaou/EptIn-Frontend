import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre";

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private httpClient: HttpClient) {
  }

  getOffersList(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>("http://localhost:3000/offres");
  }

  addNewOffer(){

  }

  deleteOffer(){

  }
}
