import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Informationsgenerales} from "../../../models/Informationsgenerales";

@Injectable({
  providedIn: 'root'
})
export class DefaultHeaderService {
  constructor(private HttpClient:HttpClient) { }
  getInformationsGenerales(id:string): Observable<Informationsgenerales>{
    let url: string = "http://localhost:3000/user/" + id;
    return this.HttpClient.get<Informationsgenerales>(url);
  }
}
