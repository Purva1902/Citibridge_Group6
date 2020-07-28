import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Purva'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    public loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin(){
    if(this.loginservice.authenticate(this.username,this.password)){
      this.router.navigate(['/users'])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

}
