import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorBD } from 'src/app/Models/ProveedorBD';
import { FormsService } from 'src/app/Services/forms.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formproveedor',
  templateUrl: './formproveedor.component.html',
  styleUrls: ['./formproveedor.component.css']
})
export class FormproveedorComponent implements OnInit{

    // proovedorFrom= new FormGroup({
    // cod_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(11)]),
    // nom_proovedor: new FormControl (null,Validators.compose([Validators.required,Validators.maxLength(25)])),
    //   dir_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(25)]),
    // tel_proovedor: new FormControl (null,[Validators.required, Validators.maxLength(10)]),
    // });




    constructor(public api: RestService,public dialog:MatDialog,public FormsService:FormsService,private fp:FormBuilder){


    }
    title: string;
  ngOnInit(): void {
    if(this.FormsService.title=='Editar'){
      this.title='Actualizar';
      this.proveedorFrom.setControl('cod_proovedor',new FormControl(this.FormsService.proveedor.codigo));
      this.proveedorFrom.setControl('nom_proovedor',new FormControl(this.FormsService.proveedor.nombre));
      this.proveedorFrom.setControl('dir_proovedor',new FormControl(this.FormsService.proveedor.direccion));
      this.proveedorFrom.setControl('tel_proovedor',new FormControl(this.FormsService.proveedor.telefono));


   }else if(this.FormsService.title=='Crear'){
    this.title='Crear';
   }
  }
    OnSubmit(): void{
      if(this.proveedorFrom.valid){
        if(this.FormsService.title=='Editar'){
          let object:ProveedorBD={
            codProveedor: this.proveedorFrom.controls['cod_proovedor'].value,
            nomProveedor: this.proveedorFrom.controls['nom_proovedor'].value,
            dirProveedor: this.proveedorFrom.controls['dir_proovedor'].value,
            telProveedor: this.proveedorFrom.controls['tel_proovedor'].value,
            estado:true
          }
          this.api.Put('proveedor/',this.FormsService.proveedor.codigo,object);
          this.dialog.closeAll();
          window.location.reload();

        }else if(this.FormsService.title=='Crear'){
          let object:ProveedorBD={
            codProveedor: this.proveedorFrom.controls['cod_proovedor'].value,
            nomProveedor: this.proveedorFrom.controls['nom_proovedor'].value,
            dirProveedor: this.proveedorFrom.controls['dir_proovedor'].value,
            telProveedor: this.proveedorFrom.controls['tel_proovedor'].value,
            estado:true
          }
          this.api.Post("proveedor/", object);
          this.dialog.closeAll();
          // location.reload();
          setTimeout(() => {
            location.reload();
          }, 3000);

        }
      Swal.fire(
        'Buen trabajo!',
        'has env iado formulario',
        'success'
      )

    }else{
      Swal.fire(
        'Mal!',
        'Formulario incompleto!',
        'error'
      )
    }

  }
    proveedorFrom=this.fp.group({
     cod_proovedor: ['',[Validators.required, Validators.maxLength(11)]],
     nom_proovedor: ['',Validators.compose([Validators.required,Validators.maxLength(25)])],
     dir_proovedor: ['',[Validators.required, Validators.maxLength(25)]],
     tel_proovedor: ['',[Validators.required, Validators.maxLength(10)]],

   });
}
