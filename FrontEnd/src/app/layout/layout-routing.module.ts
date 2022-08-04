import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from '../features/carrera/form/carrera.form.component';
import { CarreraListComponent } from '../features/carrera/list/carrera-list.component';
import { TicketFormComponent } from '../features/ticket/form/ticket.form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { UsuarioFormComponent } from '../features/usuario/form/usuario.form.component';
import { UsuarioListComponent } from '../features/usuario/list/usuario-list.component';
import { TicketListComponent } from '../features/ticket/list/ticket-list.component';
import { RespuestaFormComponent } from '../features/respuesta/form/respuesta-form.component';
import { RespuestaListComponent } from '../features/respuesta/list/respuesta-list.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraFormComponent},
      {path:'carrera-form/:id',component:CarreraFormComponent},
      {path:'carrera-list',component:CarreraListComponent},
      {path:'ticket-form',component:TicketFormComponent},
      {path:'ticket-form/:id',component:TicketFormComponent},
      {path: 'usuario-form', component: UsuarioFormComponent},
      {path: 'usuario-form/:id', component: UsuarioFormComponent},
      {path: 'respuesta-form', component: RespuestaFormComponent},
      {path: 'respuesta-form/:id', component: RespuestaFormComponent},
      {path: 'respuesta-list', component: RespuestaListComponent},
      {path: 'usuario-list', component: UsuarioListComponent},
      {path: 'ticket-list',component:TicketListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
