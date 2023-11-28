import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { FormtrabajadorComponent } from '../Form/formtrabajador/formtrabajador.component';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { FormsService } from 'src/app/Services/forms.service';
@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  spinner: boolean = true;
  subscription: Subscription;


constructor(public FormsService:FormsService,public api: RestService,public dialog: MatDialog,public spinnerService: NgxSpinnerService  ){
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

    this.api.Get("trabajador").then((res)=>{

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

  })

}

loadTable(data: any[]) {
  this.displayedColumns = [];
  if (data.length > 0) {
    for (let column in data[0]) {
      if (column !== "codigo") {
      this.displayedColumns.push(column);
      }
    }
    this.displayedColumns.push("Acciones")
  }
}
editaRegistro(id){
  this.FormsService.title='Editar';
  console.log(id)
  const dialogRef = this.dialog.open(FormtrabajadorComponent,{
    width:'40%'
  });
  this.FormsService.trabajador=(id);
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
  const dialogRef = this.dialog.open(FormtrabajadorComponent,{
    width:'40%'
  });
}
  public post(){
    this.api.Post("servicio",
    {
      cedulaTrab: "string",
      nomTrab: "string",
      apellTrab: "string",
      telTrab: "string",
      dirTrab: "string",
      correoTrab: "string",
      salarioTrab: 0,
      codContrato: "string",
      codSer: "string"
    }

  );}




public delete(id): void{

  this.api.Delete("Trabajador/",id
  );
}

}
