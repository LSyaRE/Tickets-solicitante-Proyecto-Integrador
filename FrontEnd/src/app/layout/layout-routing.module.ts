import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from '../features/carrera/form/carrera.form.component';
import { CarreraListComponent } from '../features/carrera/list/carrera-list.component';
import { TicketFormComponent } from '../features/ticket/form/ticket.form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { UsuarioFormComponent } from '../features/usuario/form/usuario.form.component';
import { UsuarioListComponent } from '../features/usuario/list/usuario-list.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraFormComponent},
      {path:'carrera-form/:id',component:CarreraFormComponent},
      {path:'carrera-list',component:CarreraListComponent},
      {path:'tiket',component:TicketFormComponent},
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
