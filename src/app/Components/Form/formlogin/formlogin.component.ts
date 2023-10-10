import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  loginForm = new FormGroup({
    CodUsuario: new FormControl(null),
    Usuario: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(25)])),
    Contraseña: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(25)])),
    Cedula_Trab: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
  });

  
  //servicioFrom = this.ft;

  constructor(private ft: FormBuilder) {
  }

  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'diste click al boton',
    )
  }
}
