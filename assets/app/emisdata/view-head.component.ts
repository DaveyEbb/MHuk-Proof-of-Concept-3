import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-view-head',
    templateUrl: 'view-head.component.html'
    //providers: [BloodtestService]
})
export class ViewHeadComponent {
    @Input() bloodtest: Bloodtest;
    @Output() editClicked = new EventEmitter<string>();

    //constructor(private bloodtestService: BloodtestService) {}

    // ngOnInit() {
    //     this.bloodtests = this.bloodtestService.getBloodtests();
    //         // .subscribe(
    //         //     (bloodtests: Bloodtest[]) => {
    //         //         this.bloodtests = bloodtests;
    //         //     }
    //         //);
    // }

    onEdit() {
        this.editClicked.emit('1st Jan 2000');
    }

    // onSave() {
    //     alert('it worked');
    // }
}