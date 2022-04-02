import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certification} from "../models/certification";
import {Skill} from "../models/skill";

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private HttpClient:HttpClient) { }

  getCertifications(userId:string):Observable<Certification[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<Certification[]>("http://localhost:3000/certification",{params:params1});
  }
  getSkills(userId:string):Observable<Skill[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<Skill[]>("http://localhost:3000/skill",{params:params1});
  }
}
