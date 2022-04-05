import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private messageSource=new BehaviorSubject<object[]>([])
  currentMessage:  Observable<object []> = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message:any[]){
    this.messageSource.next(message)
  }
}
