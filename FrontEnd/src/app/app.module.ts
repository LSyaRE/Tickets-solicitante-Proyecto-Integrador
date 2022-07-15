import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarreraComponent } from './carrera/carrera.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TicketComponent,
    CarreraComponent,
    RespuestaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
