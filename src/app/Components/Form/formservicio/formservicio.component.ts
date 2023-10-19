import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formservicio',
  templateUrl: './formservicio.component.html',
  styleUrls: ['./formservicio.component.css']
})
export class FormservicioComponent {
  servicioForm= new FormGroup({
    cod_ser: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(11)])),
    precio_ser: new FormControl (null,Validators.required),
    duracion_ser: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(50)])),
    nom_ser: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(20)])),
    des_ser: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(200)])),
    tipo_ser: new FormControl (null,Validators.compose([Validators.required,Validators.maxLength(35)])),
    nit_predio: new FormControl (null,Validators.compose([Validators.required, Validators.maxLength(15)])),
    cod_mat: new FormControl (null,Validators.compose([Validators.required,Validators.maxLength(11)])),

    });
    servicioFrom=this.fs;

    constructor(private fs:FormBuilder){

    }
    onSubmit(): void{
      Swal.fire(
        'Buen trabajo!',
        'Formulario enviado!',
        'success'
      )
    }

}
