import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GrupoModel } from 'src/app/models/grupo.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  padres: UsuarioModel[] = [];
  grupos: GrupoModel[] = [];
  usuario = new UsuarioModel();

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioService.getPersonas().subscribe(resp=>{
      this.padres = resp;
    });
    this.usuarioService.getGrupos().subscribe(resp=>{
      this.grupos = resp;
    })
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log("FORMULARIO NO VALIDO");
      return;
    }
    this.usuarioService.crearPersona(this.usuario)
    .subscribe(resp=>{
      console.log(resp);
    });
    console.log("SE GUARDÓ EXITOSAMENTE");
  }

}
