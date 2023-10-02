import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{

  constructor(public api: RestService ){}

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.api.Get("proveedor");
  }

}
