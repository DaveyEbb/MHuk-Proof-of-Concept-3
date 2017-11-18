import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-load',
    templateUrl: './load.component.html'
    //providers: [BloodtestService]
})
export class LoadComponent {
 
 message: string;
 public filestring;
 public flatBloodtest = [];

 constructor(private bloodtestService: BloodtestService) {
 }
  
  changeListener($event) : void {
    this.readThis($event.target);
  }

  onSubmit() {
    var i, j;
    for (i=0; i<this.filestring.length; i++) {
          var bloodtestLine = {
            created: "",
            totalCholesterol: "",
            Hdl: "",
            Ldl: "",
            Triglycerides: "",
            HdlRatio: ""
            };
          bloodtestLine.created = this.filestring[i].Created;
          for (j=0; j<this.filestring[i].TestResultLines.length; j++) {
          switch(this.filestring[i].TestResultLines[j].Description) {
                case "Serum cholesterol": 
                  bloodtestLine.totalCholesterol = this.filestring[i].TestResultLines[j].Result;
                  break;
                case "Serum triglycerides":
                  bloodtestLine.Triglycerides = this.filestring[i].TestResultLines[j].Result;
                  break;
                case "Serum HDL cholesterol level":
                  bloodtestLine.Hdl = this.filestring[i].TestResultLines[j].Result;
                  break;
                case "Calculated LDL cholesterol lev":
                  bloodtestLine.Ldl = this.filestring[i].TestResultLines[j].Result;
                  break;
                case "Serum cholesterol/HDL ratio":
                  bloodtestLine.HdlRatio = this.filestring[i].TestResultLines[j].Result;
                  break;
             }
           };
           console.log("** bloodtestLine: " + bloodtestLine);
           this.flatBloodtest.push(bloodtestLine);
           this.bloodtestService.addBloodtest(bloodtestLine);
        };
    }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {  
      var results = JSON.parse(myReader.result);
      var i, j;
      var bloodtestlist = [];
      for (i=0; i<results.TestResults.length; i++) {
           if (results.TestResults[i].Title=="Serum lipids") {
          bloodtestlist.push(results.TestResults[i]);
        };
      };
    this.filestring = bloodtestlist;
    console.log("Load line 60:")
    console.log(this.filestring);
    }

    myReader.readAsText(file);
     }

}