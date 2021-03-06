import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre";

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private httpClient: HttpClient) {
  }

  getOffersList(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>("http://localhost:9090/api/offres");
  }

  addNewOffer(){

  }

  deleteOffer(){

  }
}
