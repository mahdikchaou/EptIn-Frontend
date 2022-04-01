import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import{Observable} from "rxjs";
import{Informationsgenerales} from "../models/Informationsgenerales";
import {education}from"../models/education"
import {experience} from "../models/experience";
import {Skill} from "../models/skill";
import {Certification} from "../models/certification";
@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {
  constructor(private HttpClient:HttpClient) { }
  getInformationsGenerales(id:string): Observable<Informationsgenerales>{
    let url: string = "http://localhost:3000/user/" + id;
    return this.HttpClient.get<Informationsgenerales>(url);
  }
  getEducation(userId:string):Observable<education[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<education[]>("http://localhost:3000/education",{params:params1});
  }
  getExperience(userId:string):Observable<experience[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<experience[]>("http://localhost:3000/experience",{params:params1});
  }
  getSkills(userId:string):Observable<Skill[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<Skill[]>("http://localhost:3000/skill",{params:params1});
  }
  getCertifications(userId:string):Observable<Certification[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.HttpClient.get<Certification[]>("http://localhost:3000/certification",{params:params1});
  }
}
