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
    return this.httpClient.get<education[]>("http://localhost:9090/api/profile/education");
  }
}
