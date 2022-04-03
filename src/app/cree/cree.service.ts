import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre";


@Injectable({
  providedIn: 'root'
})
export class CreeService {

  constructor(private httpClient: HttpClient) { }
  getUserOffers(userId:string):Observable<Offre[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.httpClient.get<Offre[]>("http://localhost:3000/offres",{params:params1});
  }

}
