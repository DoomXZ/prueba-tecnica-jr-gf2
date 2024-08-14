import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router){
    this.loginForm=this.formBuilder.group({
      username:['kminchelle',[Validators.required]],
      password:['0lelplR',[Validators.required]]
    })
  }

  get username(){
    return this.loginForm.controls['username'];
  }
  
  get password(){
    return this.loginForm.controls['password'];
  }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      console.log("Credenciales Invalidas");
    }
  }
}
