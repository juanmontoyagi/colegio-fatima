import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TareaModel } from 'src/app/models/tarea.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea = new TareaModel();
  estudiantes: UsuarioModel[] = [];

  constructor(private tareaService: TareaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tareaService.getEstudiantes().subscribe(resp=>{
      this.estudiantes = resp;
    });
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VALIDO');
      return;
    }
    this.tareaService.crearTarea(this.tarea)
    .subscribe(resp=>{
      console.log(resp);
    })
  }

}
