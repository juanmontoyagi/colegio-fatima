import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

import { GrupoModel } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearGrupo(grupo: GrupoModel){
    return this.http.post(`${this.url}/grupo.json`, grupo)
    .pipe(
      map((resp:any)=>{
        grupo.idGrupo = resp.name;
        return grupo;
      })
    )
  }

}
