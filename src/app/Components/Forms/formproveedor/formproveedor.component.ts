import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formproveedor',
  templateUrl: './formproveedor.component.html',
  styleUrls: ['./formproveedor.component.css']
})
export class FormproveedorComponent {

    // proovedorFrom= new FormGroup({
    // cod_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(11)]),
    // nom_proovedor: new FormControl (null,Validators.compose([Validators.required,Validators.maxLength(25)])),
    //   dir_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(25)]),
    // tel_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(10)]),
    // });




    constructor(private fp:FormBuilder){


    }
    onSubmit(): void{
      Swal.fire(
        'Buen trabajo!',
        'Formulario enviado!',
        'success'
      )
    }s
    proveedorFrom=this.fp.group({
     cod_proovedor: [null,[Validators.required, Validators.maxLength(11)]],
     nom_proovedor: [null,Validators.compose([Validators.required,Validators.maxLength(25)])],
     dir_proovedor: [null,[Validators.required, Validators.maxLength(25)]],
     tel_proovedor: [null,[Validators.required, Validators.maxLength(10)]],

   });
}
