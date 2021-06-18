import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotaModel } from 'src/app/models/nota.model';
import { TareaModel } from 'src/app/models/tarea.model';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  nota = new NotaModel();
  tareas: TareaModel[] = [];

  constructor(private notaService: NotaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notaService.getTareas().subscribe(resp=>{
      this.tareas = resp;
    });
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VALIDO');
      return;
    }
    this.notaService.crearNota(this.nota)
    .subscribe(resp=>{
      console.log(resp)
    })
  }

}
