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
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule

  ]
})
export class AlumnosModule { }
