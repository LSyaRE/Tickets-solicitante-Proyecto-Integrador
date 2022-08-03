import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { FormsModule } from '@angular/forms';

import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { TicketListComponent } from './ticket/list/ticket-list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket-toolbar.component';
import { UsuarioFormComponent } from './usuario/form/usuario.form.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { UsuarioListComponent } from './usuario/list/usuario-list.component';
import { UsuarioToolbarComponent } from './usuario/toolbar/usuario-toolbar.component';
import { CarreraComboboxComponent } from './carrera/carrera-combobox/carrera-combobox.component';
import { TicketSearchComponent } from './ticket/form/ticket-search/ticket-search.component';
import { carreraComboboxComponent } from './carrera/carrera-combobox.component';
import { RespuestaSearchComponent } from './respuesta/respuesta-search/respuesta-search.component';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';
import { CarreraListComponent } from './carrera/list/carrera-list.component';
import { CarreraToolbarComponent } from './carrera/toolbar/carrera-toolbar.component';
import { UsuarioComboboxComponent } from './usuario/usuario-combobox.component';
import { UsuarioSearchComponent } from './usuario/usuario-search/usuario-search.component';


@NgModule({
  declarations: [
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    TicketSearchComponent,
    carreraComboboxComponent,
    CarreraFormComponent,
    CarreraListComponent,
    CarreraToolbarComponent,
    CarreraComboboxComponent,
    UsuarioComboboxComponent,
    UsuarioSearchComponent,
    UsuarioFormComponent,
    UsuarioToolbarComponent,
    UsuarioListComponent,
    RespuestaComponent,
    RespuestaSearchComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
