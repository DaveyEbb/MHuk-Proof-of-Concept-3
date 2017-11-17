import { Component } from "@angular/core";

@Component({
    selector: 'app-bloodtests',
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
export class BloodtestsComponent {

}