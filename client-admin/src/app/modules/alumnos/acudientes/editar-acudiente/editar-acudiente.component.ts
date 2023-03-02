import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcudienteModel } from 'src/app/models/acudiente.model';
import { AcudienteService } from 'src/app/services/alumno/acudiente.service';

@Component({
  selector: 'app-editar-acudiente',
  templateUrl: './editar-acudiente.component.html',
  styleUrls: ['./editar-acudiente.component.css']
})
export class EditarAcudienteComponent implements OnInit {

  acudienteInser:AcudienteModel= new AcudienteModel();
  alumnoId:number;
  acudienteId:number;


  constructor(
    private acudienteService: AcudienteService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    
  }

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.params['idAlumno'];
    this.acudienteId = this.route.snapshot.params['id'];
    this.acudienteService.getAcudienteById(this.acudienteId)
    .subscribe(data=> {
      this.acudienteInser=data;
      
      
    })
  }

  onUpdateAcudiente():void{
    console.log('onUpdateAcudiente')
    console.log(this.acudienteInser)
    this.acudienteService.putAcudienteById(this.acudienteInser)
    .subscribe(data=> {
      console.log(data);
      this.router.navigate(['/alumnos/editar',this.alumnoId,'acudientes']);
    })
  }


  
}
