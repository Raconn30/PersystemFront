import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{

  constructor( public api: RestService){}

  ngOnInit(): void {
    this.get();
    this.post();
  }

  public get(){
    this.api.Get("material");
  }

  public post(){
    this.api.Post("material", {
      codMat: "55",
      nomMat: "poliuretano",
      tipoMat: "",
      precioMat: 55000,
      desMat: "se obtiene de bases hidroxílicas combinadas con diisocianatos",
      numUnidades: "2",
      fechaEntrada: "2017-05-10T00:00:00",
      fechaSalida: "2019-07-10T00:00:00"
    });
  }


}
