import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/Services/rest.service';
import { FormservicioComponent } from '../Forms/formservicio/formservicio.component';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

constructor(public api: RestService,public dialog: MatDialog  ){
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
  this.api.Get("servicio").then((res)=>{

    for (let index = 0; index < res.length ; index++){
      this.loadTable([res[index]]);
    }

    this.dataSource.data = res;

    console.log(res);
})
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
editaRegistro(){
alert("Edite informacion");
}
EliminarRegistro(){
alert("Elimine el registro");
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
  this.dataSource.paginator.firstPage();
}
}
openDialog() {
  const dialogRef = this.dialog.open(FormservicioComponent,{
    width:'40%'
  });
}
public post(){
  this.api.Post("servicio",
  {
    codSer: "string",
    precioSer: 0,
    duracionSer: "string",
    nomSer: "string",
    desSer: "string",
    tipoSer: "string",
    nitPredio: "string",
    codMat: "string",
  }

);}


public put(){

  this.api.Put("servicio/",
  {
    codSer: "string",
    precioSer: 0,
    duracionSer: "string",
    nomSer: "string",
    desSer: "string",
    tipoSer: "string",
    nitPredio: "string",
    codMat: "string"}, "1");

}



public delete(): void{

  this.api.Delete("servicio/id",
   {
      codSer: "string",
      precioSer: 0,
      duracionSer: "string",
      nomSer: "string",
      desSer: "string",
      tipoSer: "string",
      nitPredio: "string",
      codMat: "string",});
}
}
