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

  getAcudienteById(id:number){
    return this.http.get<AcudienteModel>('http://localhost:3000/acudientes/'+id);
  }


  putAcudienteById(acudiente:AcudienteModel){
    
    return this.http.put<AcudienteModel>(`http://localhost:3000/acudientes/${acudiente.id}`,acudiente)
  }

  postAcudienteByAlumnoId(acudiente:AcudienteModel,alumnoID:number){

    return this.http.post<AcudienteModel>('http://localhost:3000/alumnos/'+alumnoID+'/acudientes',acudiente);
  }


}
