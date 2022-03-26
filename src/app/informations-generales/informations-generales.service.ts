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
  /*updateInformationsGenerales(infogn:Informationsgenerales): Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'}),
    };
    return this.http.put('http://localhost:3000/user'),infogn,httpOptions.pipe{
       catchError(error=> of(new InformationsGenerales())
    }
  }*/
}
