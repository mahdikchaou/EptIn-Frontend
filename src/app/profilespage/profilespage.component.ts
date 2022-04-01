import { Component, Input ,OnInit} from '@angular/core';
import{ProfilesService} from "./progiles.service";
import {stringify} from "@angular/compiler/src/util";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import{Informationsgenerales} from "../models/Informationsgenerales";

@Component({
  selector: 'app-profilespage',
  templateUrl: './profilespage.component.html',
})
export class ProfilespageComponent implements OnInit{
  profiles!:Informationsgenerales[]

  constructor(private data:DataService,private profilesService:ProfilesService, private router:Router) { }
  message!:string;


  ngOnInit(): void {
    this.profilesService.getProfilesList().subscribe(data => {
      //alert(JSON.stringify(data));
      this.profiles = data;
    });
    this.data.currentMessage.subscribe(message=>this.message=message)
  }
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
    this.data.changeMessage(elementId);
  };
  gotoProfile(){
    this.router.navigate(['home/profile'])
  }


}
