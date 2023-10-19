import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit{

  constructor(public api: RestService){ }

  ngOnInit(): void {
    this.get();
    this.post();
  }

  public get(){
    this.api.Get("contrato");
  }

  public post(){
    this.api.Post("Contrato", {
    codContrato: "122222",
    fechaInicioContr: Date,
    fechaFinalContr: Date,
    codSer: "2305",
    nitPredio: "8001475234",
    precioContrato: 1.0,
    codSerNavigation: Object,
    nitPredioNavigation: Object,
    });
  }

  // public put(){
  //   this.api.Put("contrato", {
  //   codContrato: "",
  //   });
  // }

  public delete(){
    this.api.Delete("contrato", {
      codContrato: "",
    });
  }

}
