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
<<<<<<< HEAD
import {ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FormcontratoComponent } from './Components/Form/formcontrato/formcontrato.component';
import {FormloginComponent } from './Components/Form/formlogin/formlogin.component';
import {FormmaterialComponent } from './Components/Form/formmaterial/formmaterial.component';
import {FormpredioComponent } from './Components/Form/formpredio/formpredio.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
=======
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormproveedorComponent } from './Components/Forms/formproveedor/formproveedor.component';
import { FormservicioComponent } from './Components/Forms/formservicio/formservicio.component';
import { FormrepresentanteComponent } from './Components/Forms/formrepresentante/formrepresentante.component';
import { FormtrabajadorComponent } from './Components/Forms/formtrabajador/formtrabajador.component';
>>>>>>> 3209f74133ab8e1546a1edc47535e7581801afdb

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
<<<<<<< HEAD
    FormcontratoComponent,
    FormloginComponent,
    FormmaterialComponent,
    FormpredioComponent,
=======
    FormproveedorComponent,
    FormservicioComponent,
    FormrepresentanteComponent,
    FormtrabajadorComponent
>>>>>>> 3209f74133ab8e1546a1edc47535e7581801afdb
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
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
