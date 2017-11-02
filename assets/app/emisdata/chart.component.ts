import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

//import { Emisdata } from "./emisdata.model";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent {
    myForm: FormGroup;
}