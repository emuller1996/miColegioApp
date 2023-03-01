import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent {


  alumno:AlumnoModel = new AlumnoModel();
  nombre:string;

  formAlumno = new FormGroup({
    nombres : new FormControl('',[Validators.required]),
    apellidos : new FormControl('',[Validators.required]),
    correo : new FormControl('',[Validators.required]),
    tipoDocumento : new FormControl('',[Validators.required]),
    numeroDocumento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    fechaNacimiento : new FormControl('',[Validators.required]), 
    departamentoNacimiento : new FormControl('',[Validators.required]),
    ciudadNacimiento : new FormControl('',[Validators.required]),
    direccionResidencia : new FormControl('',[Validators.required]),
    barrioResidencia : new FormControl('',[Validators.required]),
    telefono : new FormControl('',[Validators.required])







  });

  constructor( 
    private alumnoService:AlumnoService,
    private router :Router
  ){}


  onSaveAlumno():void {

    let date = new Date();
    console.log(date.toISOString());
    this.formAlumno.value.fechaNacimiento = this.formAlumno.value.fechaNacimiento+'T00:00:00.000Z';

    console.log(this.formAlumno.value);

    this.alumnoService.postAlumno(this.formAlumno.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/alumnos/lista'])

    })

  }

}
