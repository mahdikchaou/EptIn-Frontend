import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Informationsgenerales} from "../models/Informationsgenerales";
import {experience} from "../models/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpClient:HttpClient) { }

  getExperience(userId:string):Observable<experience[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.httpClient.get<experience[]>("http://localhost:3000/experience",{params:params1});
  }
}
