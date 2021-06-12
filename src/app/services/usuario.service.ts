import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL ES EL ENDPOINT DONDE POSTEARÉ LOS DATOS
  private url = 'https://colegio-fatima-27e3e-default-rtdb.firebaseio.com/';

  loggedIn: boolean = false;
  tipoUsuario: String = "";

  constructor(private http: HttpClient) { }


  crearPersona(usuario: UsuarioModel){
    return this.http.post(`${this.url}/usuario.json`, usuario)
    .pipe(
      map((resp:any)=> {
        usuario.idUsuario = resp.name;
        return usuario;
      })
    )
  }

  getPersona(idUsuario: String){
    return this.http.get(`${this.url}/usuario/${idUsuario}.json`);
  }

  getPersonas(){
    return this.http.get(`${this.url}/usuario.json`)
    .pipe(
      map(this.crearArreglo),
      delay(1500)
    );
  }


  private crearArreglo(usuariosObj: Object){
    const usuarios: UsuarioModel[] = [];
    console.log(usuariosObj)

    if (usuariosObj == null) { return []; }
    Object.keys(usuariosObj).forEach(key =>{
      const usuario: UsuarioModel = usuariosObj[key];
      usuario.idUsuario = key;
      if (usuario.tipoUsuario == '2') {
       usuarios.push(usuario);
      }
    });
    return usuarios;
  }

}
