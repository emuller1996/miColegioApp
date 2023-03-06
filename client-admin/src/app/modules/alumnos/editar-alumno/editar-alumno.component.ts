import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  alumno:AlumnoModel;
  indice:number;



  constructor(
    private alumnoService:AlumnoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    this.alumnoService.getAlumnoById(this.indice).subscribe(data=>{
      this.alumno=data
      this.alumno.fechaNacimiento = this.alumno.fechaNacimiento.toString().substring(0,10);
      console.log(data)


    })
    console.log(this.alumno);
  }


  onUpdateAlumno():void{

    this.alumno.id=0;
    this.alumnoService.putAlumno(this.alumno,this.indice).subscribe({
      next : (data) => {
        console.log(data);
        this.router.navigate(['/alumnos/lista'])
      }
    })
  }

}
