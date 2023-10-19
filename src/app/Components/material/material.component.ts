import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormmaterialComponent } from '../Form/formmaterial/formmaterial.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    this.dialog.open(FormmaterialComponent, {
      width: '50%'
    }
    ); 
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  ngOnInit(): void {
    this.get();
  }


  public get() {
    this.api.Get("material").then((res) => {

      for (let index = 0; index < res.length; index++) {
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

  editarRegistro() {
    alert("Edite informacion");
  }

  eliminarRegistro() {
    alert("Elimine el registro");
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public post(){
    this.api.Post("material", {
      codMat: "55",
      nomMat: "poliuretano",
      tipoMat: "",
      precioMat: 55000,
      desMat: "se obtiene de bases hidroxílicas combinadas con diisocianatos",
      numUnidades: "2",
      fechaEntrada: "2017-05-10T00:00:00",
      fechaSalida: "2019-07-10T00:00:00"
    });
  }


}
