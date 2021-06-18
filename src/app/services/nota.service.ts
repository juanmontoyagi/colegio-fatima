import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotaModel } from '../models/nota.model';
import { map } from 'rxjs/operators';
import { TareaModel } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearNota(nota: NotaModel){
    return this.http.post(`${this.url}/nota.json`, nota)
    .pipe(
      map((resp: any)=>{
        nota.idNota = resp.name;
        return nota;
      })
    )
  }

  getTareas(){
    return this.http.get(`${this.url}/tarea.json`)
    .pipe(
      map(this.crearArregloTareas)
    )
  }

  crearArregloTareas(tareasObj: Object){
    const tareas: TareaModel[] = [];
    console.log(tareasObj);

    if (tareasObj == null) { return []; }
    Object.entries(tareasObj).forEach(key=>{
      const tarea: TareaModel = key[1];
      tareas.push(tarea);
    });
    return tareas;
  }

}
