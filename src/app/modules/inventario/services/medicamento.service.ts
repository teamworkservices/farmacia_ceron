import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento } from 'src/app/shared/models/medicamento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MedicamentoService {

  medicamentoData: Medicamento[] = [
    {id: 1, codigoCompra: 1, codigoBarra: 'aaa', nombre: 'Primer medicamento', laboratorio: 'A', cantidad: 'Cantidad 1', precio: 123, dosificacion: 'Dosificación 1'},
    {id: 2, codigoCompra: 2, codigoBarra: 'bbb', nombre: 'Segundo medicamento', laboratorio: 'B', cantidad: 'Cantidad 2', precio: 234, dosificacion: 'Dosificación 2'},
    {id: 3, codigoCompra: 3, codigoBarra: 'ccc', nombre: 'Tercer medicamento', laboratorio: 'C', cantidad: 'Cantidad 3', precio: 345, dosificacion: 'Dosificación 3'},
  ];

  constructor() { }

  getMedicamentos(): Medicamento[] {
    return this.medicamentoData;
  }

  agregarMedicamento(medicamento: Medicamento):Medicamento {
    medicamento.id = this.medicamentoData.length+1;
    this.medicamentoData.push(medicamento);
    return medicamento;
  }

  editarMedicamento(medicamento: Medicamento):Medicamento{
    let indexMedicamento = this.medicamentoData.findIndex(item => item.id == medicamento.id);
    Object.assign(this.medicamentoData[indexMedicamento], medicamento);
    return medicamento;
  }

  eliminarMedicamento(id:number){
    this.medicamentoData = this.medicamentoData.filter(item => item.id != id);
  }
  
}