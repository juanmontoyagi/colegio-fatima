import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GrupoModel } from 'src/app/models/grupo.model';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupo = new GrupoModel();

  constructor(private grupoService: GrupoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VALIDO');
      return;
    }

    this.grupoService.crearGrupo(this.grupo)
    .subscribe(resp=>{
      console.log(resp)
    })

  }

}
