import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from './carrera/carrera.component';


const routes: Routes = [
  {path: 'carrera', component:CarreraComponent},
  {path: 'carrera/:id', component:CarreraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }