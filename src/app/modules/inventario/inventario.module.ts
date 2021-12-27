import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';
import { SharedModule } from'../../shared/shared.module';
import { CrearDosificacionComponent } from './components/crear-dosificacion/crear-dosificacion.component';
import { EditarDosificacionComponent } from './components/editar-dosificacion/editar-dosificacion.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { CrearLaboratorioComponent } from './components/crear-laboratorio/crear-laboratorio.component';
import { EditarLaboratorioComponent } from './components/editar-laboratorio/editar-laboratorio.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { CrearMedicamentoComponent } from './components/crear-medicamento/crear-medicamento.component';
import { EditarMedicamentoComponent } from './components/editar-medicamento/editar-medicamento.component';

@NgModule({
  declarations: [
    DosificacionComponent,
    CrearDosificacionComponent,
    EditarDosificacionComponent,
    LaboratorioComponent,
    CrearLaboratorioComponent,
    EditarLaboratorioComponent,
    MedicamentoComponent,
    CrearMedicamentoComponent,
    EditarMedicamentoComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
