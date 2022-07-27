import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { FormsModule } from '@angular/forms';
import { CarreraComponent } from './carrera/carrera.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { FormComponent } from './respuesta/form/form.component';
import { RespuestaListComponent } from './respuesta/list/respuesta-list.component';
import { RespuestaKanbanComponent } from './respuesta/kanban/respuesta-kanban.component';
import { RespuestaToolbarComponent } from './respuesta/toolbar/respuesta-toolbar.component';


@NgModule({
  declarations: [
    CarreraComponent,
    TicketComponent,
    UsuarioComponent,
    FormComponent,
    RespuestaListComponent,
    RespuestaKanbanComponent,
    RespuestaToolbarComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
