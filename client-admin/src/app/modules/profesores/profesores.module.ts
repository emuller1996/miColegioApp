import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';


@NgModule({
  declarations: [
    ListaProfesoresComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
