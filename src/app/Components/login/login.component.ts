import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormloginComponent } from '../Form/formlogin/formlogin.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: RestService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    this.dialog.open(FormloginComponent,{
      width: '35%'
    }); 
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
    this.api.Get("login").then((res) => {

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
  public post() {
    this.api.Post("proveedor",
      {
        codProveedor: "string",
        nomProveedor: "string",
        dirProveedor: "string",
        telProveedor: "string"
      }

    );
  }


  // public put() {

  //   this.api.Put("proveedor/",
  //     {
  //       codProveedor: "string",
  //       nomProveedor: "string",
  //       dirProveedor: "string",
  //       telProveedor: "string"
  //     });

  // }

  public delete(): void {

    this.api.Delete("proveedor/id",
      {
        codProveedor: "string",
        nomProveedor: "string",
        dirProveedor: "string",
        telProveedor: "string"
      });
  }
}
