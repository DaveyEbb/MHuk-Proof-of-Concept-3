import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Investigation } from "./investigation.model";
//import { AuthService } from "./auth.service";

@Component({
    selector: 'app-load',
    templateUrl: './load.component.html'
})
export class ViewComponent {
    myForm: FormGroup;

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