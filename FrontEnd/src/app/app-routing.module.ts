import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'usuario', component:UsuarioComponent},
  {path: 'usuario/:id', component:UsuarioComponent}
=======
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path: 'ticket', component:TicketComponent},
  {path: 'ticket/:id', component:TicketComponent}
>>>>>>> origin/feature_ticket
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> origin/feature_ticket
