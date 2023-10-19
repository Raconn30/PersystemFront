import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formtrabajador',
  templateUrl: './formtrabajador.component.html',
  styleUrls: ['./formtrabajador.component.css']
})
export class FormtrabajadorComponent {
  trabajadorForm= new FormGroup({
    cedula_trab: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(15)])),
    nom_trab: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    apell_trab: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    tel_trab: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(15)])),
    dir_trab: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(25)])),
    correo_trab: new FormControl (null,Validators.compose([Validators.email,Validators.maxLength(15)])),
    salario_trab: new FormControl (null,[Validators.required,]),
    cod_contrato: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(11)])),
    cod_ser: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(11)])),
     });
    servicioFrom=this.ft;

  constructor(private ft:FormBuilder){

  }
  onSubmit(): void{
    Swal.fire(
      'Buen trabajo!',
      'Formulario enviado!',
      'success'
    )
  }
}
