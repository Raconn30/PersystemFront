import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { FormrepresentanteComponent } from '../Form/formrepresentante/formrepresentante.component';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { FormsService } from 'src/app/Services/forms.service';


@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  spinner: boolean = false;



constructor(public FormsService:FormsService,public api: RestService,public dialog: MatDialog,public spinnerService: NgxSpinnerService){
  this.dataSource = new MatTableDataSource();
 }

ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.paginator._intl.itemsPerPageLabel = 'Registros por página';
}
ngOnInit(): void {
this.get();
}

public get(){
  this.spinnerService.show();

  if(this.spinnerService.show()){
    this.spinner=true;

   }else if(this.spinnerService.hide()){
    this.spinner=false;
   }

  this.api.Get("representante").then((res)=>{

    for (let index = 0; index < res.length ; index++){
      this.loadTable([res[index]]);


    }


    // Asignar el valor de la promesa al atributo dataSource.data
    this.dataSource.data = res;

    console.log(res);
    // Ocultar el spinner después de recibir la respuesta

     this.spinnerService.hide();

     this.spinner=false
     setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    });

});
}
showSpinner() {
  this.spinnerService.show();
  setTimeout(() => {
      /** spinner ends after 5 seconds */
      // this.spinner.hide();
  }, 5000);
}
loadTable(data: any[]) {
this.displayedColumns = [];
if (data.length > 0) {
for (let column in data[0]) {
  this.displayedColumns.push(column);
}
this.displayedColumns.push("Acciones")
}
}
editaRegistro(object: any){
  this.FormsService.title='Editar';
  console.log(object)
  const dialogRef = this.dialog.open(FormrepresentanteComponent,{
    width:'40%'
  });
  this.FormsService.representante=(object);
}
EliminarRegistro(id){
  Swal.fire({
    title: '¡Estas seguro?',
    text: "Se eliminara de forma permanente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.delete(id);

      console.log(id);
      Swal.fire(
        'Borrado!',
        'Ha sido borrado',
        'success'
      )
      window.location.reload();
    }
  })
  this.delete(id);
  return false;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();
}
}
openDialog() {
  this.FormsService.title='Crear';
  const dialogRef = this.dialog.open(FormrepresentanteComponent,{
    width:'40%'
  });
}
public post(){
this.api.Post("representante",
{
  documentoRepre: "string",
  nomRepre: "string",
  apellRepre: "string",
  telRepre: "string",
  correoRepre: "string",
  diaAtencion: "string",
  horaAtencion: "string"
}

);}


public delete(id): void{

  this.api.Delete("Representante/",id
  );
}

}
