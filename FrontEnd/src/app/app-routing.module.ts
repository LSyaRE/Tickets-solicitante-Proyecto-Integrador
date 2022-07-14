import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestaComponent } from './respuesta/respuesta.component';

const routes: Routes = [{path:'respuesta',component:RespuestaComponent},
{path:'respuesta/:id',component:RespuestaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
