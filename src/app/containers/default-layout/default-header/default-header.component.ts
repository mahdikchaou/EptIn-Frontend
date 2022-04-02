import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ClassToggleService, HeaderComponent} from '@coreui/angular';
import {DataService} from "../../../data.service";
import {AuthenticationService} from "../../../_services";
import {userIdService} from "../../../user-id.service";
import {Informationsgenerales} from "../../../models/Informationsgenerales";
import {DefaultHeaderService} from "./default-header.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  constructor(private classToggler: ClassToggleService, private router: Router, private userId: userIdService,
              private authService: AuthenticationService, private defaultHeaderService:DefaultHeaderService) {
    super();
  }
  informationsGenerales!:Informationsgenerales;


  message!: string;

  ngOnInit(): void {
    this.userId.currentMessage.subscribe(message => this.message = message);
    this.defaultHeaderService.getInformationsGenerales(this.message).subscribe(data1 => {
      this.informationsGenerales = data1;
    });
  }

  gotoprofilespage() {
    this.router.navigate(['home/profiles'])
  }

  gotooffers() {
    this.router.navigate(['home/offres'])
  }

  gotomyprofile() {
    this.router.navigate(['myprofile'])
  };

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  };



}
