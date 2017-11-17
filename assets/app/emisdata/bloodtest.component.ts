import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-bloodtest',
    templateUrl: './bloodtest.component.html'
})
export class BloodtestComponent {
    @Input() bloodtest: Bloodtest;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private bloodtestService: BloodtestService) {}

    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.bloodtestService.deleteBloodtest(this.bloodtest)
    }
}