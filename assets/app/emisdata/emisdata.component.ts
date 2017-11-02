import { Component } from "@angular/core";
import { EmisdataService } from "./emisdata.service";

@Component({
    selector: 'app-emisdata',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['load']">Load Data</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['view']">View Data</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['chart']">View Chart</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['risk']">Risk Profile</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `
})
export class EmisdataComponent {
    //constructor(private emisdataService: EmisdataService) {}

    // isLoggedIn() {
    //     return this.emisdataService.isLoggedIn();
    // }
}