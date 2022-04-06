import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import{Observable} from "rxjs";
import{Informationsgenerales} from "../models/Informationsgenerales";
import {education}from"../models/education"
import {experience} from "../models/experience";
import {Skill} from "../models/skill";
import {Certification} from "../models/certification";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {
  constructor(private HttpClient:HttpClient) { }
  getInformationsGenerales(id:string): Observable<Informationsgenerales>{
    let url: string = "http://localhost:9090/api/users/" + id;
    return this.HttpClient.get<Informationsgenerales>(url);
  }
  getEducation(userId:string):Observable<education[]>{
    return this.HttpClient.get<education[]>(`${environment.apiUrl}/profile/education/${userId}`);
  }
  getExperience(userId:string):Observable<experience[]>{
    return this.HttpClient.get<experience[]>(`${environment.apiUrl}/profile/experience/${userId}`);
  }
  // getSkills(userId:string):Observable<Skill[]>{
  //   let params1=new HttpParams();
  //   params1=params1.append('userId',userId);
  //   return this.HttpClient.get<Skill[]>("http://localhost:3000/skill",{params:params1});
  // }
  getCertifications(userId:string):Observable<Certification[]>{
    return this.HttpClient.get<Certification[]>(`${environment.apiUrl}/profile/certification/${userId}`);
  }
}
