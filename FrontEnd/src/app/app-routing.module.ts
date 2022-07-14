import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from './carrera/carrera.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'usuario', component:UsuarioComponent},
  {path: 'usuario/:id', component:UsuarioComponent},
  {path: 'carrera', component:CarreraComponent},
  {path: 'carrera/:id', component:CarreraComponent},
  {path: 'ticket', component:TicketComponent},
  {path: 'ticket/:id', component:TicketComponent},
  {path: 'respuesta', component:UsuarioComponent},
  {path: 'respuesta/:id', component:UsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
