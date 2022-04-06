import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CreeService {

  constructor(private httpClient: HttpClient) { }
  getUserOffers(userId:string):Observable<Offre[]>{

    return this.httpClient.get<Offre[]>(`${environment.apiUrl}/offres/exstudent/${userId}`);
  }

}
