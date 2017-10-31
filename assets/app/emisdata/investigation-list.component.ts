import { Component, OnInit } from "@angular/core";

import { Message } from "./investigation.model";
import { MessageService } from "./investigation.service";

@Component({
    selector: 'app-investigation-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                   [investigation]="message"
                    *ngFor="let investigation of investigations"></app-message>
        </div>
    `
})
export class InvestigationComponent implements OnInit {
    investigations: Investigation[];

    //constructor(private InvestigationService: InvestigationService) {}

    // ngOnInit() {
    //     this.messageService.getMessages()
    //         .subscribe(
    //             (messages: Message[]) => {
    //                 this.messages = messages;
    //             }
    //         );
    // }
}