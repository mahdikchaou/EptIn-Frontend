import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Informationsgenerales} from "../models/Informationsgenerales";

@Injectable({
  providedIn: 'root'
})
export class InformationsGeneralesService {

  constructor(private httpClient:HttpClient) { }

  getInformationsGeneralesList(): Observable<Informationsgenerales[]>{
    return this.httpClient.get<Informationsgenerales[]>("http://localhost:3000/user");
  }
  addNewInformationsGeneralesList(){

  }
  deleteINformationsGeneralesList(){

  }
}
