import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required]
    })
  }

  login(){
    let user : User = this.loginForm.value;

    this.userService.getUser(user).subscribe(data=>{
      if(data.length>0){
        this.toastrService.success("Sisteme giriş yapıldı.");
        localStorage.setItem("user",JSON.stringify(data[0]))
        this.router.navigate(["products"])
      }else{
        this.toastrService.error("Kullanıcı bilgileri hatalı.")
      }
    })
  }

}
