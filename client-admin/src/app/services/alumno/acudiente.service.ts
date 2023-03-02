import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcudienteModel } from 'src/app/models/acudiente.model';

@Injectable({
  providedIn: 'root'
})
export class AcudienteService {

  recodList:AcudienteModel[];

  constructor(
    private http:HttpClient
  ){}

  getAcudienteByAlumnoId(id:number){

    return this.http.get<AcudienteModel[]>('http://localhost:3000/alumnos/'+id+'/acudientes');
  }


}
