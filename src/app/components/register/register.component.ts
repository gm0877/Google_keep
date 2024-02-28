import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user_services/user.service';

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
  UserService: any;
  
  ngOnInit():void{

  }

  constructor(private formBuilder: FormBuilder,public userService:UserService){
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
    const{firstName,lastName,userName,password}=this.RegisterForm.value
     this.userService.registerUser({
      "firstName":firstName,
      "lastName":lastName,
      "email":userName,
      "password":password,
      "service":"advance"
     }).subscribe(
      (result)=>{console.log(result);
      },
      (error)=>{
        console.error(error);})
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
