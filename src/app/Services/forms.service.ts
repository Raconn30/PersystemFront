import { Injectable } from '@angular/core';
import { TrabajadorMV } from '../Models/TrabajadorMV';
import { ServicioMV } from '../Models/ServicioMV';
import { RepresentanteMV } from '../Models/RepresentanteMV';
import { ProveedorBD } from '../Models/ProveedorBD';
import { ProveedorMV } from '../Models/ProveedorMV';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  title: string;
  trabajador: TrabajadorMV;
  servicio:ServicioMV;
  representante:RepresentanteMV;
  proveedor:ProveedorMV;

}

