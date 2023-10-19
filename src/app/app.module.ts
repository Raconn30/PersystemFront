import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ContratoComponent } from './Components/contrato/contrato.component';
import { MaterialComponent } from './Components/material/material.component';
import { PredioComponent } from './Components/predio/predio.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { RepresentanteComponent } from './Components/representante/representante.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import { TrabajadorComponent } from './Components/trabajador/trabajador.component';
import { LoginComponent } from './Components/login/login.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormproveedorComponent } from './Components/Forms/formproveedor/formproveedor.component';
import { FormservicioComponent } from './Components/Forms/formservicio/formservicio.component';
import { FormrepresentanteComponent } from './Components/Forms/formrepresentante/formrepresentante.component';
import { FormtrabajadorComponent } from './Components/Forms/formtrabajador/formtrabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContratoComponent,
    MaterialComponent,
    PredioComponent,
    ProveedorComponent,
    RepresentanteComponent,
    ServicioComponent,
    TrabajadorComponent,
    LoginComponent,
    FormproveedorComponent,
    FormservicioComponent,
    FormrepresentanteComponent,
    FormtrabajadorComponent
  ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
