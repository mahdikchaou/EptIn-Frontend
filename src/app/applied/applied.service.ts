import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import{candidature} from "../models/candidature";
import {Offre} from "../models/offre";

@Injectable({
  providedIn: 'root'
})
export class AppliedService {

  constructor(private HttpClient:HttpClient) { }
  getCandidatures(userId:string):Observable<candidature[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<candidature[]>("http://localhost:3000/candidature",{params:params1});
  }
  getUserAppliedOffer(offerId:string):Observable<Offre>{
    return this.HttpClient.get<Offre>("http://localhost:3000/offres/"+offerId);
  }
}
