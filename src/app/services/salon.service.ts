import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SalonModel } from '../models/salon.model';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  private url = 'https://colegio-fatima-62409-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearSalon(salon: SalonModel){
    return this.http.post(`${this.url}/salon.json`, salon)
    .pipe(
      map((resp:any)=>{
        salon.idSalon = resp.name;
        return salon;
      })
    )
  }

}
