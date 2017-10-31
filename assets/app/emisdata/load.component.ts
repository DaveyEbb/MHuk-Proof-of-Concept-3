import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Emisdata } from "./emisdata.model";
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



      //console.log(myReader.result);
    }

    myReader.readAsText(file);
  }

// function readSingleFile(e) {
//   var file = e.target.files[0];
//   if (!file) {
//     return;
//   }
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var contents = e.target.result;
//     displayContents(contents);
//     //
//     obj = JSON.parse(contents);
//     console.log(obj);
//     document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
//     //
//   };
//   reader.readAsText(file);
// }

// function displayContents(contents) {
//   var element = document.getElementById('file-content');
//   element.textContent = contents;
// }

// var obj = {};

//  document.getElementById('file-input')
//    .addEventListener('change', readSingleFile, false);



// 

    // constructor(private authService: AuthService, private router: Router) {}

    // onSubmit() {
    //     const user = new User(this.myForm.value.email, this.myForm.value.password);
    //     this.authService.signin(user)
    //         .subscribe(
    //             data => {
    //                 localStorage.setItem('token', data.token);
    //                 localStorage.setItem('userId', data.userId);
    //                 this.router.navigateByUrl('/');
    //             },
    //             error => console.error(error)
    //         );
    //     this.myForm.reset();
    // }

    // ngOnInit() {
    //     this.myForm = new FormGroup({
    //         email: new FormControl(null, [
    //             Validators.required,
    //             Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //         ]),
    //         password: new FormControl(null, Validators.required)
    //     });
    // }
}