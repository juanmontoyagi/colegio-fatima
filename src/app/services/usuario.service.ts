import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, delay } from 'rxjs/operators';
import { GrupoModel } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL ES EL ENDPOINT DONDE POSTEARÉ LOS DATOS
  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

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
      map(this.crearArregloUsuario),
      delay(1500)
    );
  }

  private crearArregloUsuario(usuariosObj: Object){
    const usuarios: UsuarioModel[]= [];
    console.log(usuariosObj);
    if (usuariosObj == null) { return []; }
    Object.entries(usuariosObj).forEach(key=> {
      const usuario: UsuarioModel = key[1];
      usuarios.push(usuario);
    })
    return usuarios;
  }

  getGrupos(){
    return this.http.get(`${this.url}/grupo.json`)
    .pipe(
      map(this.crearArregloGrupos)
    );
  }

  private crearArregloGrupos(gruposObj: Object){
    const grupos: GrupoModel[] = [];
    console.log(gruposObj);
    if (gruposObj == null) { return []; }
    Object.entries(gruposObj).forEach(key=>{
    const grupo: GrupoModel = key[1];
    grupos.push(grupo);
    });
    return grupos;
  }

}
