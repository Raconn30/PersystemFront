import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpredio',
  templateUrl: './formpredio.component.html',
  styleUrls: ['./formpredio.component.css']
})
export class FormpredioComponent {

  /*
  predioForm = new FormGroup({
    NitPredio: new FormControl(null),
    NomPredio: new FormControl(null),
    CuartosPredio: new FormControl(null),
    TipoCuarto: new FormControl(null),
    DirPredio: new FormControl(null),
    CorreoPredio: new FormControl(null),
    DocumentoRepre: new FormControl(null)
  });
  */

  constructor(private ft: FormBuilder) {
  }

  predioForm = this.ft.group({
    NitPredio: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
    NomPredio: [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
    CuartosPredio: [null, Validators.required],
    TipoCuarto: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
    DirPredio: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
    CorreoPredio: [null, Validators.compose([Validators.required, Validators.email])],
    DocumentoRepre: [null, Validators.compose([Validators.required, Validators.maxLength(15)])]
  })

  onSubmit(): void{
    Swal.fire(
      'Buen trabajo!',
      'Formulario enviado!',
      'success'
    )
   }

}
