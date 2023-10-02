import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit{

  constructor(public api: RestService ){}

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.api.Get("servicio");
  }
}
