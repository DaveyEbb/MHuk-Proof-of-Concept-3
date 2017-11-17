import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { Bloodtest } from "./bloodtest.model";

@Injectable()
export class BloodtestService {
  private bloodtests: Bloodtest[] = [];
 
 constructor() { }
 
  addBloodtest(bloodtest: Bloodtest) {
    this.bloodtests.push(bloodtest); 
    console.log("Bloodtest Service !!!!!");
    console.log(this.bloodtests);
  }
 
  getBloodtests() {
    return this.bloodtests;
  }
 
  deleteBloodtest(bloodtest: Bloodtest) {
    this.bloodtests.splice(this.bloodtests.indexOf(bloodtest), 1);  
  }
  
}