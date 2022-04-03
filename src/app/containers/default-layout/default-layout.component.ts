import {Component, Input, OnInit} from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{
  public navItems = navItems;


  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
