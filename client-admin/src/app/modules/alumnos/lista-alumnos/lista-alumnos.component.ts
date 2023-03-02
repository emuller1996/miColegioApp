import { Component, OnInit  } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { Observable } from 'rxjs';
import { AlumnoService } from "../../../services/alumno/alumno.service";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent  implements OnInit {

  listaAlumnos : AlumnoModel[];


  constructor(
    private alumnoService: AlumnoService,
  ) { }


  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe(data=>{
      this.listaAlumnos = data;
    });
    console.log(this.listaAlumnos)
  }



}
