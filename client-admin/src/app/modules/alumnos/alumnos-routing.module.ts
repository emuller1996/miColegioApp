import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAcudientesComponent } from './acudientes/crear-acudientes/crear-acudientes.component';
import { EditarAcudienteComponent } from './acudientes/editar-acudiente/editar-acudiente.component';
import { ListaAcudientesComponent } from './acudientes/lista-acudientes/lista-acudientes.component';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path:'lista',
    component:ListaAlumnosComponent
  },
  {
    path:'crear',
    component: CrearAlumnosComponent
  },
  {
    path:'editar/:id',
    component: EditarAlumnoComponent
  },
  {
    path:'editar/:idAlumno/acudientes',
    component: ListaAcudientesComponent
  },
  {
    path:'editar/:idAlumno/acudientes/crear',
    component: CrearAcudientesComponent
  },
  {
    path:'editar/:idAlumno/acudientes/editar/:id',
    component: EditarAcudienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
