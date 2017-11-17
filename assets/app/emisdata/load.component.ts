import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Bloodtest } from "./bloodtest.model";
import { BloodtestService } from "./bloodtest.service";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-load',
    templateUrl: './load.component.html',
    providers: [BloodtestService]
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
    console.log("**********");
    console.log(this.filestring);
    //this.bloodtestService.sendMessage("Message from Load component to View component");
    //console.log(">>>>>");
    //console.log(this.flatBloodtest);
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
          console.log(this.filestring[i].Created);
          bloodtestLine.created = this.filestring[i].Created;
          console.log(">> " + i);
          //console.log(bloodtestLine);
           for (j=0; j<this.filestring[i].TestResultLines.length; j++) {
             //console.log(this.filestring[i].TestResultLines[j].Result);
             switch(this.filestring[i].TestResultLines[j].Description) {
                case "Serum cholesterol": 
                  bloodtestLine.totalCholesterol = this.filestring[i].TestResultLines[j].Result;
                  //console.log("Serum cholesterol: " + this.filestring[i].TestResultLines[j].Result);
                  break;
                case "Serum triglycerides":
                  bloodtestLine.Triglycerides = this.filestring[i].TestResultLines[j].Result;
                  //console.log("Serum triglycerides: " + this.filestring[i].TestResultLines[j].Result);
                  break;
                case "Serum HDL cholesterol level":
                  bloodtestLine.Hdl = this.filestring[i].TestResultLines[j].Result;
                  //console.log("Serum HDL cholesterol level: " + this.filestring[i].TestResultLines[j].Result);
                  break;
                case "Calculated LDL cholesterol lev":
                  bloodtestLine.Ldl = this.filestring[i].TestResultLines[j].Result;
                  //console.log("Calculated LDL cholesterol lev: " + this.filestring[i].TestResultLines[j].Result);
                  break;
                case "Serum cholesterol/HDL ratio":
                  bloodtestLine.HdlRatio = this.filestring[i].TestResultLines[j].Result;
                  //console.log("Serum cholesterol/HDL ratio: " + this.filestring[i].TestResultLines[j].Result);
                  break;
             }
           };
           console.log("** bloodtestLine: " + bloodtestLine);
           this.flatBloodtest.push(bloodtestLine);
           this.bloodtestService.addBloodtest(bloodtestLine);
        //console.log(this.flatBloodtest);
        };
    //console.log("this.flatBloodlist");
    //console.log(this.flatBloodtest);
    //var bloodtest: Bloodtest;
    //bloodtest.created = this.flatBloodtest[0].created;
    //const bloodtest = new Bloodtest();
    //this.bloodtestService.addBloodtest(bloodtest);      
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

}