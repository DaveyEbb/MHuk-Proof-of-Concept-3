import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

import { LoadComponent } from "./emisdata/load.component";
import { ViewComponent } from "./emisdata/view.component";
import { EmisdataComponent } from "./emisdata/emisdata.component";
import { EmisdataService } from "./emisdata/emisdata.service";
import { InvestigationComponent } from "./emisdata/investigation.component";
import { ChartComponent } from "./emisdata/chart.component";
import { RiskComponent } from "./emisdata/risk.component";
import { ResultListComponent } from "./emisdata/result-list.component";
import { BloodtestListComponent } from "./emisdata/bloodtest-list.component";
import { BloodtestService } from "./emisdata/bloodtest.service";
import { BloodtestsComponent } from "./emisdata/bloodtests.component";
import { BloodtestInputComponent } from "./emisdata/bloodtest-input.component";
import { ViewHeadComponent } from "./emisdata/view-head.component";
import { BloodtestComponent } from "./emisdata/bloodtest.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        LoadComponent,
        ViewComponent,
        EmisdataComponent,
        InvestigationComponent,
        ChartComponent,
        RiskComponent,
        ResultListComponent,
        BloodtestListComponent,
        BloodtestsComponent,
        BloodtestInputComponent,
        ViewHeadComponent,
        BloodtestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AuthService, ErrorService, EmisdataService, BloodtestService],
    bootstrap: [AppComponent]
})
export class AppModule {

}