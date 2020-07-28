import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class users{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }
  public getUsers()
  {
    console.log("test call");
    return this.httpClient.get<users[]>('http://localhost:8080/users');
  }
}
