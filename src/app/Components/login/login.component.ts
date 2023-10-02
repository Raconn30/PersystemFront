import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(public api:RestService){
    
  }
  ngOnInit(): void {
    this.get();
  }
public get(){
  this.api.Get("login");
}
}
