import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './Components/contrato/contrato.component';
import { MaterialComponent } from './Components/material/material.component';
import { PredioComponent } from './Components/predio/predio.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { RepresentanteComponent } from './Components/representante/representante.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import { TrabajadorComponent } from './Components/trabajador/trabajador.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:"contrato", component:ContratoComponent},
  {path:"material", component:MaterialComponent},
  {path:"predio", component:PredioComponent},
  {path:"proveedor", component:ProveedorComponent},
  {path:"representante", component:RepresentanteComponent},
  {path:"servicio", component:ServicioComponent},
  {path:"trabajador", component:TrabajadorComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
