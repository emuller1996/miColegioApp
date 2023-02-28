import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';

const routes: Routes = [
  {
    path:'lista',
    component:ListaProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
