import { Component } from '@angular/core';

import { BloodtestService }      from './bloodtest.service';

@Component({
  selector: 'app-foo',
  template: `
  <fieldset>
    <legend>Foo Component</legend>
    <button (click)="incCount()">Increment</button>
  </fieldset>
  `
})
export class FooComponent {

  constructor(private countService: BloodtestService) { }
  
  incCount() {
    this.countService.increment();
  }

}