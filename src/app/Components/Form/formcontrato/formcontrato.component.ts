import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formcontrato',
  templateUrl: './formcontrato.component.html',
  styleUrls: ['./formcontrato.component.css']
})
export class FormcontratoComponent {

  contratoForm = new FormGroup({
    CodContrato: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    FechaInicioContr: new FormControl(null, Validators.required),
    FechaFinalContr: new FormControl(null, Validators.required),
    CodSer: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    NitPredio: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(11)])),
    PrecioContrato: new FormControl(null, Validators.compose([Validators.required ,Validators.maxLength(11)])),

  });

  constructor(private ft: FormBuilder) {
  }

  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'diste click al boton',
    )
  }

}
