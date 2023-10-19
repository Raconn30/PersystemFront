import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,Validator } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formcontrato',
  templateUrl: './formcontrato.component.html',
  styleUrls: ['./formcontrato.component.css']
})
export class FormcontratoComponent {

  constructor(private ft: FormBuilder) {
  }

  /* contratoForm = new FormGroup({
    CodContrato: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    FechaInicioContr: new FormControl(null, Validators.required),
    FechaFinalContr: new FormControl(null, Validators.required),
    CodSer: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    NitPredio: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    PrecioContrato: new FormControl(null, Validators.compose([Validators.required ,Validators.maxLength(11)])),

  }); */

  contratoForm = this.ft.group({
    CodContrato: [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
    FechaInicioContr:[null,Validators.required],
    FechaFinalContr: [null,Validators.required],
    CodSer: [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
    NitPredio: [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
    PrecioContrato: [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
  });


  onSubmit(): void{
    Swal.fire(
      'Buen trabajo!',
      'Formulario enviado!',
      'success'
    )
   }

}
