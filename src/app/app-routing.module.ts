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
import { FormloginComponent } from './Components/Form/formlogin/formlogin.component';
import { FormcontratoComponent } from './Components/Form/formcontrato/formcontrato.component';
import { FormmaterialComponent } from './Components/Form/formmaterial/formmaterial.component';
import { FormpredioComponent } from './Components/Form/formpredio/formpredio.component';

const routes: Routes = [
  {path:"contrato", component:ContratoComponent},
  {path:"material", component:MaterialComponent},
  {path:"predio", component:PredioComponent},
  {path:"proveedor", component:ProveedorComponent},
  {path:"representante", component:RepresentanteComponent},
  {path:"servicio", component:ServicioComponent},
  {path:"trabajador", component:TrabajadorComponent},
  {path:"login", component:LoginComponent},
  {path:"formularioLogin", component:FormloginComponent},
  {path:"formularioContrato", component:FormcontratoComponent},
  {path:"formularioMaterial", component:FormmaterialComponent},
  {path:"formularioPredio", component:FormpredioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
