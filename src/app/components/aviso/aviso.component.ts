import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvisoModel } from 'src/app/models/aviso.model';
import { GrupoModel } from 'src/app/models/grupo.model';
import { AvisoService } from 'src/app/services/aviso.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  aviso = new AvisoModel();
  grupos: GrupoModel[] = [];
  

  constructor(private avisoService: AvisoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.avisoService.getGrupos().subscribe(resp=>{
      this.grupos = resp;
    });
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VÁLIDO');
      return;
    }

    this.avisoService.crearAviso(this.aviso)
    .subscribe(resp=>{
      console.log(resp)
    })
  }

}
