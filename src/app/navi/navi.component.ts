import { Component, OnInit } from '@angular/core';
import { User } from '../login/user';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }

  checkUser():boolean{
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  

}
