import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AcudienteModel } from 'src/app/models/acudiente.model';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AcudienteService } from 'src/app/services/alumno/acudiente.service';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';

@Component({
  selector: 'app-lista-acudientes',
  templateUrl: './lista-acudientes.component.html',
  styleUrls: ['./lista-acudientes.component.css']
})
export class ListaAcudientesComponent implements OnInit  {


  alumnoId:number;
  alumnoAcudiente:AlumnoModel=new AlumnoModel();
  listaAcudiente!  :AcudienteModel[];



  constructor(
    private acudienteService :AcudienteService,
    private alumnoService:AlumnoService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.params['idAlumno'];
    this.alumnoService.getAlumnoById(this.alumnoId).subscribe(data=>{
      this.alumnoAcudiente=data
    });

    this.acudienteService.getAcudienteByAlumnoId(this.alumnoId).subscribe(data=>{
      this.listaAcudiente= data;
    });

  }



}
