import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  reorderItems = [];
  reorderMode = false;
  
  constructor() {
    // just make 25 dumb items
    for (let i = 0; i < 25; i++) {
      this.reorderItems.push({
        id: i,
        value: `Something${i}`
      });
    }
  }

}
