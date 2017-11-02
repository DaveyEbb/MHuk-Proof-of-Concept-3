import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Investigation } from "./investigation.model";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-load',
    templateUrl: './load.component.html'
})
export class LoadComponent {
    myForm: FormGroup;

  changeListener($event) : void {
    this.readThis($event.target);
    }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      var results = JSON.parse(myReader.result);      
      console.log(results);
      console.log("===========");
      // console.log(results.TestResults[0].TestResultLines[0].Description);
      // for (let key in results) {
      //   console.log(key + ':' + results(key);)
      // }

      var i, j;
      var bloodtestlist = [];
      for (i=0; i<results.TestResults.length; i++) {
        console.log("results.TestResults.Title:  " + results.TestResults[i].Title);
        if (results.TestResults[i].Title=="Serum lipids") {
          console.log("**** Hit")
          bloodtestlist.push(results.TestResults[i]);
        };
        // for (j=0; j<results.TestResults[i].TestResultLines.length; j++) {
        //   console.log(results.TestResults[i].TestResultLines[j].Description);
        // };
      };
    console.log("-----------");
    console.log(bloodtestlist);

    }

    myReader.readAsText(file);
  }
}