import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formmaterial',
  templateUrl: './formmaterial.component.html',
  styleUrls: ['./formmaterial.component.css']
})
export class FormmaterialComponent {

  materialForm = new FormGroup({
    CodMat: new FormControl(null),
    NomMat: new FormControl(null),
    TipoMat: new FormControl(null),
    PrecioMat: new FormControl(null),
    DesMat: new FormControl(null),
    NumUnidades: new FormControl(null)

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
