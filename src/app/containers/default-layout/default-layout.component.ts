import {Component, Input, OnInit} from '@angular/core';

import { navItems } from './_nav';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{
  public navItems = navItems;


  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  message!: string;

  constructor(private data:DataService) {

  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message=>this.message=message)

  }
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
    this.data.changeMessage(elementId);
  };
}
