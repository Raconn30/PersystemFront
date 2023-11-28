import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-predio',
  templateUrl: './predio.component.html',
  styleUrls: ['./predio.component.css']
})
export class PredioComponent implements OnInit{

  constructor(public api: RestService ){}

  ngOnInit(): void {
    this.get();
  }

  public get(){
    this.api.Get("predio");
  }

  public post(){
    this.api.Post("predio/id", {
      nitPredio: "",
      nomPredio: "",
      cuartosPredio: "",
      tipoCuarto: "",
      dirPredio: "",
      correoPredio: "",
      documentoRepre: "",
    });
  }

  // public put(){
  //   this.api.Put("predio/id", {
  //     nitPredio: "",
  //     nomPredio: "",
  //     cuartosPredio: "",
  //     tipoCuarto: "",
  //     dirPredio: "",
  //     correoPredio: "",
  //     documentoRepre: "",
  //   });
  // }

  public delete(): void{
    this.api.Delete("predio/id", {
      nitPredio: "",
      nomPredio: "",
      cuartosPredio: "",
      tipoCuarto: "",
      dirPredio: "",
      correoPredio: "",
      documentoRepre: "",
    });
  }

}
