import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router,
    private acudienteService :AcudienteService,
    private alumnoService:AlumnoService,
  ){}

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.params['idAlumno'];
    this.acudienteInser.esPrincipal=false;
  }


onSaveAcudiente(){

  console.log(this.acudienteInser);
  console.log("onSaveAcudiente");

  this.acudienteService.postAcudienteByAlumnoId(this.acudienteInser,this.alumnoId)
  .subscribe(data=>{
    console.log(data);    
    this.router.navigate(['alumnos/editar/',this.alumnoId,'acudientes'])
  })

}

}
