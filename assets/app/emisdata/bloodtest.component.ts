import { Component, Input } from "@angular/core";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-bloodtest',
    templateUrl: './bloodtest.component.html'
})
export class BloodtestComponent {
    @Input() bloodtest: Bloodtest;

    constructor(private bloodtestService: BloodtestService) {}

    // onEdit() {
    //     this.messageService.editMessage(this.message);
    // }

    // onDelete() {
    //     this.messageService.deleteMessage(this.message)
    //         .subscribe(
    //             result => console.log(result)
    //         );
    // }

    // belongsToUser() {
    //     return localStorage.getItem('userId') == this.message.userId;
    // }
}