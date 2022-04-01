import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import{Offre} from "../models/offre";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private HttpClient:HttpClient) { }
  getOfferList(id:string): Observable<Offre>{
   let url: string = "http://localhost:3000/offres/" + id;
    return this.HttpClient.get<Offre>(url);
  }
}
