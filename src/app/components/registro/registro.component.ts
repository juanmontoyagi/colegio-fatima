import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  padres: UsuarioModel[] = [];
  usuario = new UsuarioModel();

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log("FORMULARIO NO VALIDO");
      return;
    }

    // CREAR UNA VARIABLE PARA CENTRALIZAR LA PETICIÓN SÍ ES GUARDAR O ACTUALIZAR
    let peticion: Observable<any>;

    //if (this.usuario.idUsuario) {
      // ACÁ PARA ACTUALIZARLO
    //} else {
    peticion = this.usuarioService.crearPersona(this.usuario);
    console.log("SE GUARDÓ EXITOSAMENTE");
  //}
  }

}
