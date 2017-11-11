import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-load',
    providers: [BloodtestService],
    templateUrl: './load.component.html',
})
export class LoadComponent {
 
 message: string;
 public filestring;

 constructor(private countService: BloodtestService) {
 }

  getCount() {
    return this.countService.get();
  }
  
  changeListener($event) : void {
    this.readThis($event.target);
  }

  onSubmit() {
    console.log("**********");
    console.log(this.filestring);
    //this.bloodtestService.sendMessage("Message from Load component to View component");
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    //myReader.onloadend = function(e){
    myReader.onloadend = (e) => {  
      // myReader.result is a String of the uploaded file
      var results = JSON.parse(myReader.result);
      console.log(results);
      console.log("===========");
      var i, j;
      var bloodtestlist = [];
      for (i=0; i<results.TestResults.length; i++) {
        //console.log("results.TestResults.Title:  " + results.TestResults[i].Title);
        if (results.TestResults[i].Title=="Serum lipids") {
          bloodtestlist.push(results.TestResults[i]);
        };
        // for (j=0; j<results.TestResults[i].TestResultLines.length; j++) {
        //   console.log(results.TestResults[i].TestResultLines[j].Description);
        // };
      };
    console.log(bloodtestlist);
    //this.filestring = myReader.result;
    this.filestring = bloodtestlist;
    console.log("Load line 60:")
    console.log(this.filestring);
    }
    myReader.readAsText(file);
     }

    //  newMessage() {
    //     console.log("newMessage()");
    //     this.data.changeMessage("Hello from Load Component");
    // }

    // ngOnInit() {
    //   this.data.currentMessage.subscribe(message => this.message = message)
    // }

}