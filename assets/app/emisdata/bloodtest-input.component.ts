import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { BloodtestService } from "./bloodtest.service";
import { Bloodtest } from "./bloodtest.model";

@Component({
    selector: 'app-bloodtest-input',
    templateUrl: './bloodtest-input.component.html'
})
export class BloodtestInputComponent {
    constructor(private bloodtestService: BloodtestService) {}

    onSubmit(form: NgForm) {
        const bloodtest = new Bloodtest(form.value.created, 'Testing');
        this.bloodtestService.addBloodtest(bloodtest);
        form.resetForm();
    }
}