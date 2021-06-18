import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearTarea(tarea: TareaModel){
    return this.http.post(`${this.url}/tarea.json`, tarea)
    .pipe(
      map((resp:any)=>{
        tarea.idTarea = resp.name;
        return tarea;
      })
    )
  }

  getEstudiantes(){
    return this.http.get(`${this.url}/usuario.json`)
    .pipe(
      map(this.crearArregloEstudiantes)
    )
  }

  crearArregloEstudiantes(estudiantesObj: Object){
    const estudiantes: UsuarioModel[] = [];
    console.log(estudiantesObj);

    if (estudiantesObj == null) { return []; }
    Object.entries(estudiantesObj).forEach(key=>{
      const estudiante: UsuarioModel = key[1];
      estudiantes.push(estudiante);
    });
    return estudiantes;
  }

}
