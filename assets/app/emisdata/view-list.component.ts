import { Component, OnInit } from "@angular/core";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-view-list',
    template: `
        <div class=".col-md-8 col-md-offset-2">
            <app-bloodtest
                [bloodtest]="bloodtest"
                (editClicked)="bloodtest.content = $event"
                *ngFor="let bloodtest of bloodtests">
            </app-bloodtest>
        </div>
    `,
    providers: [MessageService]
})
export class ViewListComponent implements OnInit {
    bloodtests: Bloodtest[];

    constructor(private bloodtestService: BloodtestService) {}

    ngOnInit() {
        this.bloodtests = this.bloodtestService.getBloodtests();
            // .subscribe(
            //     (bloodtests: Bloodtest[]) => {
            //         this.bloodtests = bloodtests;
            //     }
            //);
    }
}