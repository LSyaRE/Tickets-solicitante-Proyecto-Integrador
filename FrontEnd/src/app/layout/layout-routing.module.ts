import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from '../features/ticket/form/ticket.form.component';
import { TicketListComponent } from '../features/ticket/list/ticket-list.component';
import { CarreraComponent } from '../features/carrera/carrera.component';
import { UsuarioComponent } from '../features/usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraComponent},
      {path: 'ticket-form', component:TicketFormComponent},
      {path: 'ticket-form/:id', component:TicketFormComponent},
      {path: 'ticket-list', component:TicketListComponent},
      {path: 'user-form', component:UsuarioComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
