import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { FormsModule } from '@angular/forms';

import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { TicketListComponent } from './ticket/list/ticket-list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket-toolbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { carreraComboboxComponent } from './carrera/carrera-combobox.component';
import { RespuestaSearchComponent } from './respuesta/respuesta-search/respuesta-search.component';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';
@NgModule({
  declarations: [
    CarreraFormComponent,
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    UsuarioComponent,
    RespuestaComponent,
    carreraComboboxComponent,
    RespuestaSearchComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
