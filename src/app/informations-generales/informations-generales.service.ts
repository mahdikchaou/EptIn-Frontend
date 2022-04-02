import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Informationsgenerales} from "../models/Informationsgenerales";

@Injectable({
  providedIn: 'root'
})
export class InformationsGeneralesService {

  constructor(private httpClient:HttpClient) { }

  getInformationsGenerales(id:string): Observable<Informationsgenerales>{
    let url: string = "http://localhost:3000/user/" + id;
    return this.httpClient.get<Informationsgenerales>(url);
  }
  addNewInformationsGeneralesList(){

  }
  deleteINformationsGeneralesList(){

  }
}
