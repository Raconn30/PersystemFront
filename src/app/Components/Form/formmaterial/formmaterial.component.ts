import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formmaterial',
  templateUrl: './formmaterial.component.html',
  styleUrls: ['./formmaterial.component.css']
})
export class FormmaterialComponent {

  /*
  materialForm = new FormGroup({
    CodMat: new FormControl(null),
    NomMat: new FormControl(null),
    TipoMat: new FormControl(null),
    PrecioMat: new FormControl(null),
    DesMat: new FormControl(null),
    NumUnidades: new FormControl(null)

  });
  */

  constructor(private ft: FormBuilder) {
  }

  materialForm = this.ft.group({
    CodMat: [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
    NomMat: [null, Validators.compose([Validators.required, Validators.maxLength(25)])],
    TipoMat: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
    PrecioMat:[null, Validators.required],
    DesMat: [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
    NumUnidades: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
    FechaEntrada: [null, Validators.required],
    FechaSalida: [null, Validators.required]
  })

  onSubmit(): void{
    Swal.fire(
      'Buen trabajo!',
      'Formulario enviado!',
      'success'
    )
   }

}
