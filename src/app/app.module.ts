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
import {ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FormcontratoComponent } from './Components/Form/formcontrato/formcontrato.component';
import {FormloginComponent } from './Components/Form/formlogin/formlogin.component';
import {FormmaterialComponent } from './Components/Form/formmaterial/formmaterial.component';
import {FormpredioComponent } from './Components/Form/formpredio/formpredio.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

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
    FormcontratoComponent,
    FormloginComponent,
    FormmaterialComponent,
    FormpredioComponent,
  ],
  imports: [
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
