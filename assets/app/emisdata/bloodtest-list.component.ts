import { Component } from "@angular/core";
import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-bloodtest-list',
    templateUrl: './bloodtest-list.html'
})
export class BloodtestListComponent {
    bloodtests: Bloodtest[];

    constructor(private bloodtestService: BloodtestService) {}

    ngOnInit() {
        // this.bloodtestService.getBloodtests()
        //     .subscribe(
        //         (bloodtests: Bloodtest[]) => {
        //             this.bloodtests = bloodtests;
        //         }
    }
}