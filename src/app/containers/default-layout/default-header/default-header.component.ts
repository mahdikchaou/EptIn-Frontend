import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{Router} from "@angular/router";
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {DataService} from "../../../data.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private router:Router, private data:DataService) {
    super();
  }
  message!:string;
  ngOnInit():void{
    this.data.currentMessage.subscribe(message=>this.message=message);
  }
  gotoprofilespage(){
    this.router.navigate(['home/profiles'])
  }
  gotooffers(){
    this.router.navigate(['home/offres'])
  }
  gotomyprofile(){
    this.router.navigate(['myprofile'])
  };
}
