import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.get();
  }


  public get() {
    this.api.Get("contrato").then((res) => {

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
    this.api.Post("Contrato", {
    codContrato: "122222",
    fechaInicioContr: Date,
    fechaFinalContr: Date,
    codSer: "2305",
    nitPredio: "8001475234",
    precioContrato: 1.0,
    codSerNavigation: Object,
    nitPredioNavigation: Object,
    });
  }

  public put(){
    this.api.Put("contrato", {
    codContrato: "",
    });
  }

  public delete(){
    this.api.Delete("contrato", {
      codContrato: "",
    });
  }

}
