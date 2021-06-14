import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AvisoModel } from '../models/aviso.model';
import { GrupoModel } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearAviso(aviso: AvisoModel){
    return this.http.post(`${this.url}/aviso.json`, aviso)
    .pipe(
      map((resp:any)=>{
        aviso.idAviso = resp.name;
        return aviso;
      })
    )
  }

  getGrupos(): Observable<GrupoModel[]>{
    return this.http.get<GrupoModel[]>(`${this.url}/grupo.json`)
    .pipe(
      map(this.crearArregloGrupos)
    );
  }


  private crearArregloGrupos(gruposObj: Object){
    const grupos: GrupoModel[] = [];
    console.log(gruposObj);

    if (gruposObj == null) { return []; }
    Object.keys(gruposObj).forEach(key=>{
      const grupo: GrupoModel = (key: string) => (gruposObj: Record<string, any>) => gruposObj[key];
      grupo.idGrupo = key;
      console.log(grupo.idGrupo);
      grupos.push(grupo);
    });
    return grupos;
  }

}
