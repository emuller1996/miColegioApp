import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule, FormsModule  } from '@angular/forms'; 
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { ListaAcudientesComponent } from './acudientes/lista-acudientes/lista-acudientes.component';
import { CrearAcudientesComponent } from './acudientes/crear-acudientes/crear-acudientes.component';
import { EditarAcudienteComponent } from './acudientes/editar-acudiente/editar-acudiente.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    CrearAlumnosComponent,
    EditarAlumnoComponent,
    ListaAcudientesComponent,
    CrearAcudientesComponent,
    EditarAcudienteComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlumnosModule { }
