import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { FormsModule } from '@angular/forms';
import { CarreraComponent } from './carrera/carrera.component';
import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { TicketListComponent } from './ticket/list/ticket-list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket-toolbar.component';
import { UsuarioFormComponent } from './usuario/form/usuario.form.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { UsuarioListComponent } from './usuario/list/usuario-list.component';
import { UsuarioToolbarComponent } from './usuario/toolbar/usuario-toolbar.component';
import { CarreraComboboxComponent } from './carrera/carrera-combobox/carrera-combobox.component';


@NgModule({
  declarations: [
    CarreraComponent,
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    UsuarioFormComponent,
    RespuestaComponent,
    UsuarioListComponent,
    UsuarioToolbarComponent,
    CarreraComboboxComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
