import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit{
  constructor(public api: RestService ){}

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.api.Get("trabajador");
  }

}
