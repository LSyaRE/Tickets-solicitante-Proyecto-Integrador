import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { UsuarioFormComponent } from './usuario/form/usuario.form.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'usuario', component:UsuarioFormComponent},
  {path: 'usuario/:id', component:UsuarioFormComponent},
  {path: 'carrera', component:CarreraComponent},
  {path: 'carrera/:id', component:CarreraComponent},
=======
  {path: 'usuario', component:UsuarioComponent},
  {path: 'usuario/:id', component:UsuarioComponent},
  {path: 'carrera', component:CarreraFormComponent},
  {path: 'carrera/:id', component:CarreraFormComponent},
>>>>>>> 2465ff2d18b107e9ea277b1261ab5edf515ad8e6
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
