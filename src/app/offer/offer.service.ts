import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import{Offre} from "../models/offre";
import {environment} from "../../environments/environment";

const API_PATH = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private HttpClient:HttpClient) { }
  getOffer(id:number): Observable<Offre>{
   let url: string = "http://localhost:9090/api/offres/id/" + id;
    return this.HttpClient.get<Offre>(url);
  }

  applyToOffer(offerId:string):Observable<any>{
    return this.HttpClient.post<any>(API_PATH+"/offres/apply", offerId);
  }
}
