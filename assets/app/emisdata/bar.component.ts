import { Component } from '@angular/core';

import { BloodtestService }      from './bloodtest.service';

@Component({
  selector: 'app-bar',
  template: `
  <fieldset>
    <legend>Bar Component</legend>
    <button (click)="decCount()">Decrement</button>
  </fieldset>
  `
})
export class BarComponent {

  constructor(private countService: BloodtestService) { }

  decCount() {
    this.countService.decrement();
  }

}