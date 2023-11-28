import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrabajadorBD } from 'src/app/Models/TrabajadorBD';
import { FormsService } from 'src/app/Services/forms.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formtrabajador',
  templateUrl: './formtrabajador.component.html',
  styleUrls: ['./formtrabajador.component.css']
})
export class FormtrabajadorComponent implements OnInit {
  trabajadorForm= new FormGroup({
    cedula_trab: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(15)])),
    nom_trab: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    apell_trab: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    tel_trab: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(15)])),
    dir_trab: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    correo_trab: new FormControl ('',Validators.compose([Validators.email,Validators.maxLength(15)])),
    salario_trab: new FormControl ('',[Validators.required,]),
    cod_contrato: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(11)])),
     });
    servicioFrom=this.ft;

  constructor(public api: RestService,public dialog:MatDialog,public FormsService:FormsService,private ft:FormBuilder){

  }
  ser: any;
  pre: any;
  x: any;
  title: string;
  ngOnInit(): void {
   if(this.FormsService.title=='Editar'){
      this.title='Actualizar';
      this.trabajadorForm.setControl('cedula_trab',new FormControl(this.FormsService.trabajador.cedula));
      this.trabajadorForm.setControl('nom_trab',new FormControl(this.FormsService.trabajador.nombre));
      this.trabajadorForm.setControl('apell_trab',new FormControl(this.FormsService.trabajador.apellido));
      this.trabajadorForm.setControl('tel_trab',new FormControl(this.FormsService.trabajador.telefono));
      this.trabajadorForm.setControl('dir_trab',new FormControl(this.FormsService.trabajador.direccion));
      this.trabajadorForm.setControl('correo_trab',new FormControl(this.FormsService.trabajador.correo));
      this.trabajadorForm.setControl('salario_trab',new FormControl(this.FormsService.trabajador.salario.toString()));
      this.trabajadorForm.setControl('cod_contrato',new FormControl(this.FormsService.trabajador.precioDelContrato.toString()));

   }else if(this.FormsService.title=='Crear'){
    this.title='Crear';

   }
   this.get1();
   this.ser = this.trabajadorForm.controls['cod_contrato'].value;
  }
  cambio() {
    console.log("Hola");
    console.log(this.trabajadorForm.controls["cod_contrato"].value);
  }
  contrato1 = [];
  public get1() {
    this.api.Get("Contrato").then((res) => {
      this.contrato1 = [];
      for (let index = 0; index < res.length; index++) {
        this.contrato1.push({ codigo: res[index].codigo, precio: res[index].precio });
        console.log(res);
      }
      console.log(this.contrato1);
    })
  }

  onSubmit(): void{
    if(this.trabajadorForm.valid){
      if(this.FormsService.title=='Editar'){
        let object:TrabajadorBD={
          cedulaTrab: this.trabajadorForm.controls['cedula_trab'].value,
          nomTrab: this.trabajadorForm.controls['nom_trab'].value,
          apellTrab: this.trabajadorForm.controls['apell_trab'].value,
          telTrab: this.trabajadorForm.controls['tel_trab'].value,
          dirTrab: this.trabajadorForm.controls['dir_trab'].value,
          correoTrab: this.trabajadorForm.controls['correo_trab'].value,
          salarioTrab: parseFloat(this.trabajadorForm.controls['salario_trab'].value),
          codContrato: this.trabajadorForm.controls['cod_contrato'].value,
          estado: true
        }
        this.api.Put('Trabajador/',this.FormsService.trabajador.cedula,object);
        this.dialog.closeAll();
        window.location.reload();
      }else if(this.FormsService.title=='Crear'){
                let object:TrabajadorBD={
          cedulaTrab: this.trabajadorForm.controls['cedula_trab'].value,
          nomTrab: this.trabajadorForm.controls['nom_trab'].value,
          apellTrab: this.trabajadorForm.controls['apell_trab'].value,
          telTrab: this.trabajadorForm.controls['tel_trab'].value,
          dirTrab: this.trabajadorForm.controls['dir_trab'].value,
          correoTrab: this.trabajadorForm.controls['correo_trab'].value,
          salarioTrab: parseFloat(this.trabajadorForm.controls['salario_trab'].value),
          codContrato: this.trabajadorForm.controls['cod_contrato'].value,
          estado: true
        }
        this.api.Post("Trabajador/", object);
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

}
