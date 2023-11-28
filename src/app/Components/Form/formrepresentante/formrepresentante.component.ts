import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepresentanteBD } from 'src/app/Models/RepresentanteBD';
import { FormsService } from 'src/app/Services/forms.service';
import { RestService } from 'src/app/Services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formrepresentante',
  templateUrl: './formrepresentante.component.html',
  styleUrls: ['./formrepresentante.component.css']
})
export class FormrepresentanteComponent implements OnInit{
  representanteForm= new FormGroup({
    documento_repre: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(15)])),
    nom_repre: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    apell_repre: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    tel_repre: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(15)])),
    correo_repre: new FormControl ('',Validators.compose([Validators.email,Validators.maxLength(25)])),
    dia_atencion: new FormControl ('',Validators.compose([Validators.required,Validators.maxLength(15)])),
    hora_atencion: new FormControl ('',Validators.compose([Validators.required, Validators.maxLength(25)])),
    });
    servicioFrom=this.fr;

  constructor(public api: RestService,public dialog:MatDialog,public FormsService:FormsService,private fr:FormBuilder){

  }
  title: string;
  ngOnInit(): void {
    if(this.FormsService.title=='Editar'){
      this.title='Actualizar';
      this.representanteForm.setControl('documento_repre',new FormControl(this.FormsService.representante.documento));
      this.representanteForm.setControl('nom_repre',new FormControl(this.FormsService.representante.nombre));
      this.representanteForm.setControl('apell_repre',new FormControl(this.FormsService.representante.apellido));
      this.representanteForm.setControl('tel_repre',new FormControl(this.FormsService.representante.telefono));
      this.representanteForm.setControl('correo_repre',new FormControl(this.FormsService.representante.correo));
      this.representanteForm.setControl('dia_atencion',new FormControl(this.FormsService.representante.diaAtencion));
      this.representanteForm.setControl('hora_atencion',new FormControl(this.FormsService.representante.horaAtencion));


   }else if(this.FormsService.title=='Crear'){
    this.title='Crear';
   }
  }

  onSubmit(): void{
    if(this.representanteForm.valid){
      if(this.FormsService.title=='Editar'){
        let object:RepresentanteBD={
          documentoRepre: this.representanteForm.controls['documento_repre'].value,
          nomRepre: this.representanteForm.controls['nom_repre'].value,
          apellRepre: this.representanteForm.controls['apell_repre'].value,
          telRepre: this.representanteForm.controls['tel_repre'].value,
          correoRepre: this.representanteForm.controls['correo_repre'].value,
          diaAtencion: this.representanteForm.controls['dia_atencion'].value,
          horaAtencion: this.representanteForm.controls['hora_atencion'].value,
          estado: true
        }
        this.api.Put('representante/',this.FormsService.representante.documento,object);
        this.dialog.closeAll();
        window.location.reload();

      }else if(this.FormsService.title=='Crear'){
        let object:RepresentanteBD={
          documentoRepre: this.representanteForm.controls['documento_repre'].value,
          nomRepre: this.representanteForm.controls['nom_repre'].value,
          apellRepre: this.representanteForm.controls['apell_repre'].value,
          telRepre: this.representanteForm.controls['tel_repre'].value,
          correoRepre: this.representanteForm.controls['correo_repre'].value,
          diaAtencion: this.representanteForm.controls['dia_atencion'].value,
          horaAtencion: this.representanteForm.controls['hora_atencion'].value,
          estado: true
        }
        this.api.Post("representante/", object);
        this.dialog.closeAll();
        // location.reload();
        setTimeout(() => {
          location.reload();
        }, 3000);
      }




    Swal.fire(
      'Buen trabajo!',
      'has enviado formulario',
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
