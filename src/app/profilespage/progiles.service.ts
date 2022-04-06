import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import{Informationsgenerales} from "../models/Informationsgenerales";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private httpClient: HttpClient) {
  }

  getProfilesList(): Observable<Informationsgenerales[]> {
    return this.httpClient.get<Informationsgenerales[]>("http://localhost:9090/api/users");
  }
}
