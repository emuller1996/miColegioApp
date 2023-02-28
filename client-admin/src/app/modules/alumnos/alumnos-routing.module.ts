import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path:'lista',
    component:ListaAlumnosComponent
  },
  {
    path:'crear',
    component: CrearAlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
