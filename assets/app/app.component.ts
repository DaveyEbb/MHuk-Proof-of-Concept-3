import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import { BloodtestService } from "./emisdata/bloodtest.service";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, BloodtestService]
})
export class AppComponent {
}