import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading: Boolean = false;
  submitted: Boolean = false;


  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.MustMatch('password', 'confirmPassword')
    }
    );
  }

  get f() { 
    return this.registerForm.controls; 
  }

  MustMatch(controlName:string, matchingControlName:string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // return if another validator already found an error on matching control
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return
      }

      // if control name is equal to matchingControl, then just return a null value
      // otherwise set the errors and rerturn
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      }
      else {
        matchingControl.setErrors(null);
      }

    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.route.navigate(['/home']);
  }

}
