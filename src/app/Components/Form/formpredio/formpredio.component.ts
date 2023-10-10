import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpredio',
  templateUrl: './formpredio.component.html',
  styleUrls: ['./formpredio.component.css']
})
export class FormpredioComponent {

  predioForm = new FormGroup({
    NitPredio: new FormControl(null),
    NomPredio: new FormControl(null),
    CuartosPredio: new FormControl(null),
    TipoCuarto: new FormControl(null),
    DirPredio: new FormControl(null),
    CorreoPredio: new FormControl(null),
    DocumentoRepre: new FormControl(null)
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
