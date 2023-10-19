import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formrepresentante',
  templateUrl: './formrepresentante.component.html',
  styleUrls: ['./formrepresentante.component.css']
})
export class FormrepresentanteComponent {
  representanteForm= new FormGroup({
    documento_repre: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(15)])),
    nom_repre: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    apell_repre: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    tel_repre: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(15)])),
    correo_repre: new FormControl (null,Validators.compose([Validators.email,Validators.maxLength(25)])),
    dia_atencion: new FormControl (null,Validators.compose([Validators.required,Validators.maxLength(15)])),
    hora_atencion: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    });
    servicioFrom=this.fr;

  constructor(private fr:FormBuilder){

  }
  onSubmit(): void{
    Swal.fire(
      'Buen trabajo!',
      'Formulario enviado!',
      'success'
    )
  }
}
