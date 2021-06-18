import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutorizacionModel } from 'src/app/models/autorizacion.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent implements OnInit {

  autorizacion = new AutorizacionModel();
  estudiantes: UsuarioModel[] = [];

  constructor(private autorizacionService: AutorizacionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.autorizacionService.getEstudiantes().subscribe(resp=>{
      this.estudiantes = resp;
    });
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VALIDO');
    return;
    }
    this.autorizacionService.crearAutorizacion(this.autorizacion)
    .subscribe(resp=>{
      console.log(resp);
    })
  }



}
