import { Injectable } from '@angular/core';
import { users } from './http-client.service';
import { HttpClientService} from './http-client.service';
import { UserComponent} from '../user/user.component';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private user1: any[];
  user1 : HttpClientService["getUsers"];
  private name: users["name"];
  private designation: users["designation"];

  constructor() { }
  authenticate(username,password){
    if (username === "Purva" && password === "password"){
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }

  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut(){
    sessionStorage.removeItem('username')
  }
}
