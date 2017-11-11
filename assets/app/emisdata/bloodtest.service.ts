import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { Bloodtest } from "./bloodtest.model";

@Injectable()
export class BloodtestService {
 
 constructor() { }
 
  public count = 0;
 
  get() {
    return this.count;
  }
 
  increment() {
    this.count++;  
  }
  
  decrement() {
    this.count--;
  }
  
}