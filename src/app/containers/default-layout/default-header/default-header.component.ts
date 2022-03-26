import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{Router} from "@angular/router";

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  @Input('type') type:string='Offers';

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private router:Router) {
    super();
  }
  gotoprofilespage(){
    this.router.navigate(['profiles'])
  }
  gotooffers(){
    this.router.navigate(['offres'])
  }
  gotomyprofile(){
    this.router.navigate(['myprofile'])
  };
}
