import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { TicketFormComponent } from './ticket/form/ticket.form.component';

import { UsuarioFormComponent } from './usuario/form/usuario.form.component';

const routes: Routes = [
  {path: 'usuario', component:UsuarioFormComponent},
  {path: 'usuario/:id', component:UsuarioFormComponent},
  {path: 'carrera', component:CarreraFormComponent},
  {path: 'carrera/:id', component:CarreraFormComponent},
  {path: 'ticket', component:TicketFormComponent},
  {path: 'ticket/:id', component:TicketFormComponent},
  {path: 'respuesta', component:RespuestaComponent},
  {path: 'respuesta/:id', component:RespuestaComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
