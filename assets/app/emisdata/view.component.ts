import { Component } from "@angular/core";

@Component({
    selector: 'app-view',
    template: `
      <div class="row">
        <app-bloodtest-input></app-bloodtest-input>
      </div>
      <hr>
      <div class="row">
        <app-bloodtest-list></app-bloodtest-list>
      </div>
    `
})
export class ViewComponent {
    
}