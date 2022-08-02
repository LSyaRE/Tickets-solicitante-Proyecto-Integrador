import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from '../features/carrera/carrera.component';
import { FormComponent } from '../features/respuesta/form/form.component';
import { RespuestaListComponent } from '../features/respuesta/list/respuesta-list.component';
import { TicketComponent } from '../features/ticket/ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'respuesta-list', component:RespuestaListComponent},
      {path: 'respuesta-form', component:FormComponent},
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraComponent},
      {path:'tiket',component:TicketComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
