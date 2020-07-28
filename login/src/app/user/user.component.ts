import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] ,
  providers: [HttpClientService]
})
export class UserComponent implements OnInit {
 users:string[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response =>{this.handleSuccessfulResponse(response)},
    );
  }
  handleSuccessfulResponse(response)
  {
    this.users=response;
  }

}
