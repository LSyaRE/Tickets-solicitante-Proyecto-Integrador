import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from '../features/ticket/form/ticket.form.component';
import { TicketListComponent } from '../features/ticket/list/ticket-list.component';
import { CarreraComponent } from '../features/carrera/carrera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { UsuarioFormComponent } from '../features/usuario/form/usuario.form.component';
import { UsuarioListComponent } from '../features/usuario/list/usuario-list.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraComponent},
      {path:'ticket',component:TicketFormComponent},
      {path: 'ticket-form', component:TicketFormComponent},
      {path: 'ticket-form/:id', component:TicketFormComponent},
      {path: 'ticket-list', component:TicketListComponent},
      {path: 'usuario-form', component: UsuarioFormComponent},
      {path: 'usuario-form/:id', component: UsuarioFormComponent},
      {path: 'usuario-list', component: UsuarioListComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
