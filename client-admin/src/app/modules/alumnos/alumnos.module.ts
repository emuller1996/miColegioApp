import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    CrearAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
