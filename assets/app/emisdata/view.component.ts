import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Subscription";
//import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";

@Component({
    selector: 'app-load',
    templateUrl: './view.component.html' 
})
export class ViewComponent {
    
  constructor(private countService: BloodtestService) { 
  }

    getCount() {    
        return this.countService.get();
  }
}