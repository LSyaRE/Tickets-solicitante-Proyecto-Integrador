import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from '../features/carrera/carrera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
