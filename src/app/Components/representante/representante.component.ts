import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit{

     constructor(public api: RestService ){}

  ngOnInit(): void {
    this.get();
    this.post();
  }

  public get(){
    this.api.Get("representante");
  }
  
  public post(){
    this.api.Post("representante", {
    documentoRepre: "",
    nomRepre: "",
    apellRepre: "",
    telRepre: "",
    correoRepre: "",
    diaAtencion: "",
    horaAtencion: "",
    });
  }

  public put(){
    this.api.Put("representante", {
      documentoRepre: "",
      nomRepre: "",
      apellRepre: "",
      telRepre: "",
      correoRepre: "",
      diaAtencion: "",
      horaAtencion: "",
    });
  }

  public delete(): void{
    this.api.Delete("representante", {
    documentoRepre: "",
    nomRepre: "",
    apellRepre: "",
    telRepre: "",
    correoRepre: "",
    diaAtencion: "",
    horaAtencion: "",
    });
  }

}
