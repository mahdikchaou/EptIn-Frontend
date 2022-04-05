import {Component, Input, OnInit} from '@angular/core';

import {navItems} from './_nav';
import {FilterService} from "../../data-filter.service";
import {Router} from "@angular/router";
import{navItems2} from "./_nav2";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public navItems2=navItems2;
  filterObject: any[] = []

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private fileterService: FilterService, private router: Router) {

  }

  ngOnInit(): void {
    navItems.forEach(item => {
      item["isNavItemSelected"] = false;
    })
  }

  toggle(item:any) {
    item.isNavItemSelected=!item.isNavItemSelected;
    const key=item.href;
    const value=item.name;
    let x: any = {};
    x[key] = value;
    let isKeyExist = false;
    this.filterObject.forEach(f => {
      if (f.hasOwnProperty(key)) {
        f[key] = value;
        isKeyExist = true;
      }
    });
    if (!isKeyExist) {
      this.filterObject.push(x);
    }
    this.fileterService.changeMessage(this.filterObject);
    this.router.navigate(['/home/offres'])
  }
  refresh(){
    window.location.reload()
  }

}


