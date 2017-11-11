import { Component, OnInit } from "@angular/core";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-view-list',
    template: `
        
    `
})
export class ViewListComponent implements OnInit {
    bloodtests: Bloodtest[];

    constructor(private bloodtestService: BloodtestService) {}

    ngOnInit() {
        this.bloodtestService.getBloodtests()
            .subscribe(
                (bloodtests: Bloodtest[]) => {
                    this.bloodtests = bloodtests;
                }
            );
    }
}