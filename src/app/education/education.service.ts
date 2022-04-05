import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {education} from "../models/education";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private httpClient:HttpClient) {
  }
  getEducation(userId:string):Observable<education[]>{
    let params1=new HttpParams();
    params1=params1.append('userId',userId);
    return this.httpClient.get<education[]>("http://localhost:3000/education",{params:params1});
  }
}
