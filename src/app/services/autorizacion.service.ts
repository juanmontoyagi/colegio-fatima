import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutorizacionModel } from '../models/autorizacion.model';
import { map } from 'rxjs/operators'; 
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearAutorizacion(autorizacion: AutorizacionModel){
    return this.http.post(`${this.url}/autorizacion.json`, autorizacion)
    .pipe(
      map((resp:any)=>{
        autorizacion.idAutorizacion = resp.name;
        return autorizacion;
      })
    )
  }

  getEstudiantes(){
    return this.http.get(`${this.url}/usuarios.json`)
    .pipe(
      map(this.crearArregloEstudiantes)
    )
  }

  crearArregloEstudiantes(estudianteObj: Object){
    const estudiantes: UsuarioModel[] = [];
    console.log(estudianteObj);

    if (estudianteObj == null) {return [];}
    Object.entries(estudianteObj).forEach(key=>{
      const estudiante: UsuarioModel = key[1];
      estudiantes.push(estudiante); 
    });
    return estudiantes;
  }

}
