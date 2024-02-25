import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  host: {

    class:"app-register-cnt"
  }
})
export class RegisterComponent implements OnInit{
  RegisterForm !: FormGroup
  submitted: boolean = false
  
  ngOnInit():void{

  }

  constructor(private formBuilder: FormBuilder){
    this.RegisterForm =this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      userName:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cnf_pswd: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  get f(){
    return this.RegisterForm.controls;
  }

  registerUser(){
    this.submitted=true;
    console.log(this.RegisterForm.value);
    
  }


  passwordMatchValidator(control: AbstractControl): {[key: string]: any} | null {
    const password = control.get('password');
    const cnf_pswd = control.get('cnf_pswd');
    if (password && cnf_pswd && password.value !== cnf_pswd.value) {
      return {passwordMismatch: true};
    }
    return null;
  }
  


}
