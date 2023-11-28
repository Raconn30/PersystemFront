import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicioBD } from 'src/app/Models/ServicioBD';
import { FormsService } from 'src/app/Services/forms.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formservicio',
  templateUrl: './formservicio.component.html',
  styleUrls: ['./formservicio.component.css']
})
export class FormservicioComponent implements OnInit {
  servicioForm= new FormGroup({
    cod_ser: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(11)])),
    precio_ser: new FormControl ('',Validators.required),
    duracion_ser: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(50)])),
    nom_ser: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(20)])),
    des_ser: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(200)])),
    tipo_ser: new FormControl ('',Validators.compose([Validators.required,Validators.maxLength(35)])),
    cod_mat: new FormControl ('',Validators.compose([Validators.required,Validators.maxLength(25)])),

    });
    servicioFrom=this.fs;

    constructor(public api: RestService,public dialog:MatDialog,public FormsService:FormsService,private fs:FormBuilder){

    }
    Material: any;
    pre: any;
    x: any;
    title: string;
  ngOnInit(): void {
    if(this.FormsService.title=='Editar'){
      this.title='Actualizar';
      this.servicioForm.setControl('cod_ser',new FormControl(this.FormsService.servicio.codigo));
      this.servicioForm.setControl('precio_ser',new FormControl(this.FormsService.servicio.precio.toString()));
      this.servicioForm.setControl('duracion_ser',new FormControl(this.FormsService.servicio.duracion));
      this.servicioForm.setControl('nom_ser',new FormControl(this.FormsService.servicio.nombre));
      this.servicioForm.setControl('des_ser',new FormControl(this.FormsService.servicio.descripcion));
      this.servicioForm.setControl('tipo_ser',new FormControl(this.FormsService.servicio.tipo));
      this.servicioForm.setControl('cod_mat',new FormControl(this.FormsService.servicio.material));

   }else if(this.FormsService.title=='Crear'){
    this.title='Crear';
   }
   this.get1();
   this.Material = this.servicioForm.controls['cod_mat'].value;
  }
  cambio() {
    console.log("Hola");
    console.log(this.servicioForm.controls["cod_mat"].value);
  }

  material1 = [];
  public get1() {
    this.api.Get("Material").then((res) => {
      this.material1 = [];
      for (let index = 0; index < res.length; index++) {
        this.material1.push({ codigo: res[index].codigo,  nombre: res[index].nombre});
        console.log(res);
      }
      console.log(this.material1);
    })
  }

    onSubmit(): void{
      if(this.servicioForm.valid){
        if(this.FormsService.title=='Editar'){
          let object:ServicioBD={
            codSer: this.servicioForm.controls['cod_ser'].value,
            precioSer: parseInt(this.servicioForm.controls['precio_ser'].value),
           duracionSer: this.servicioForm.controls['duracion_ser'].value,
            nomSer: this.servicioForm.controls['nom_ser'].value,
            desSer: this.servicioForm.controls['des_ser'].value,
            tipoSer: this.servicioForm.controls['tipo_ser'].value,
            codMat: this.servicioForm.controls['cod_mat'].value,
            estado: true
          }
          this.api.Put('Servicio/',this.FormsService.servicio.codigo,object);
          this.dialog.closeAll();
          window.location.reload();
        }else if(this.FormsService.title=='Crear'){
          let object:ServicioBD={
            codSer: this.servicioForm.controls['cod_ser'].value,
            precioSer: parseFloat(this.servicioForm.controls['precio_ser'].value),
           duracionSer: this.servicioForm.controls['duracion_ser'].value,
            nomSer: this.servicioForm.controls['nom_ser'].value,
            desSer: this.servicioForm.controls['des_ser'].value,
            tipoSer: this.servicioForm.controls['tipo_ser'].value,
            codMat: this.servicioForm.controls['cod_mat'].value,
            estado: true
          }
          this.api.Post("Servicio/", object);
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
