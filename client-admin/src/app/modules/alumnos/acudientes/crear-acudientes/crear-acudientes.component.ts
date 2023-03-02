import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcudienteModel } from 'src/app/models/acudiente.model';
import { AcudienteService } from 'src/app/services/alumno/acudiente.service';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';

@Component({
  selector: 'app-crear-acudientes',
  templateUrl: './crear-acudientes.component.html',
  styleUrls: ['./crear-acudientes.component.css']
})
export class CrearAcudientesComponent implements OnInit {

  alumnoId:number;
  acudienteInser:AcudienteModel = new AcudienteModel();




  constructor(
    private route:ActivatedRoute,
    private acudienteService :AcudienteService,
    private alumnoService:AlumnoService,
  ){}

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.params['idAlumno'];
  }


onSaveAcudiente(){

  console.log(this.acudienteInser);
}

}
