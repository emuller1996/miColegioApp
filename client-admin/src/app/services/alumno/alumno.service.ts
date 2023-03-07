import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  URL_BASE:string =environment.url;
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

    return this.http.get<AlumnoModel[]>(`${this.URL_BASE}/alumnos?filter=${strin}`);

     

  }


  getAlumnoById(id:number){

    return this.http.get<AlumnoModel>(`${this.URL_BASE}/alumnos/${id}`);
  }

  postAlumno(alumno:object){
    return this.http.post<AlumnoModel>(`${this.URL_BASE}/alumnos`,alumno)
  }

  putAlumno(alumno:AlumnoModel,id:number){
    return this.http.put<AlumnoModel>(`${this.URL_BASE}/alumnos/${id}`,alumno)
  }
}
