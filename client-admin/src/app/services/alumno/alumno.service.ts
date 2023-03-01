import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  recodList:AlumnoModel[];


  constructor(
    private http:HttpClient
  ) { }



  getAlumnos(){

    var s = {
      "offset": 0,
      "limit": 8,
      "skip": 0,
      "order": "nombres"
      
    }
    const strin = JSON.stringify(s)
    console.log(strin)

    console.log( new URLSearchParams(strin));
    console.log(new URLSearchParams(strin).toString())

    return this.http.get<AlumnoModel[]>('http://localhost:3000/alumnos?filter='+strin);


  }


  getAlumnoById(id:number){

    return this.http.get<AlumnoModel>('http://localhost:3000/alumnos/'+id);
  }

  postAlumno(alumno:object){
    return this.http.post<AlumnoModel>('http://localhost:3000/alumnos',alumno)
  }

  putAlumno(alumno:AlumnoModel,id:number){
    return this.http.put<AlumnoModel>('http://localhost:3000/alumnos/'+id,alumno)
  }
}
