import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalonModel } from 'src/app/models/salon.model';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  salon = new SalonModel();

  constructor(private salonService: SalonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('FORMULARIO NO VALIDO');
      return;
    }
    this.salonService.crearSalon(this.salon)
    .subscribe(resp=>{
      console.log(resp)
    })
  }

}
