import { Component, Input } from '@angular/core';

import { navItems } from 'src/app/containers/default-layout/_nav';

@Component({
  selector: 'app-profilespage',
  templateUrl: './profilespage.component.html',
})
export class ProfilespageComponent {
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() { }


}
