import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AutorizacionComponent } from './components/autorizacion/autorizacion.component';
import { AvisoComponent } from './components/aviso/aviso.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { HorarioComponent } from './components/horario/horario.component';
import { NotaComponent } from './components/nota/nota.component';
import { SalonComponent } from './components/salon/salon.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { RegistroComponent } from './components/registro/registro.component';

// IMPORTACIONES DE BOOTSTRAP
//import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AutorizacionComponent,
    AvisoComponent,
    GrupoComponent,
    HorarioComponent,
    NotaComponent,
    SalonComponent,
    TareaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
