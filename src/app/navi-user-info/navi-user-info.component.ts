import { Component, OnInit } from '@angular/core';
import { User } from '../login/user';

@Component({
  selector: 'app-navi-user-info',
  templateUrl: './navi-user-info.component.html',
  styleUrls: ['./navi-user-info.component.css']
})
export class NaviUserInfoComponent implements OnInit {

  user:User;
  constructor() { }

  ngOnInit(): void {
  }

  getUserInfo():User{
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user;
  }

  signOut(){
    localStorage.clear()
  }

}
