import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import{Offre} from "../models/offre";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private HttpClient:HttpClient) { }
  getOffer(id:string): Observable<Offre>{
   let url: string = "http://localhost:9090/api/offres/" + id;
    return this.HttpClient.get<Offre>(url);
  }
}
