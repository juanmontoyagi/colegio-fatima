import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionComponent } from './components/autorizacion/autorizacion.component';
import { AvisoComponent } from './components/aviso/aviso.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { HomeComponent } from './components/home/home.component';
import { HorarioComponent } from './components/horario/horario.component';
import { LoginComponent } from './components/login/login.component';
import { NotaComponent } from './components/nota/nota.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SalonComponent } from './components/salon/salon.component';
import { TareaComponent } from './components/tarea/tarea.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'autorizacion', component: AutorizacionComponent},
  {path: 'grupo', component: GrupoComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'nota', component: NotaComponent},
  {path: 'salon', component: SalonComponent},
  {path: 'tarea', component: TareaComponent},
  {path: 'aviso', component: AvisoComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
