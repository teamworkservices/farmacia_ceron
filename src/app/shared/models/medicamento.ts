export class Medicamento {

    id!: number;
    codigoCompra!: number;
    codigoBarra!: string;
    nombre!: string;
    laboratorio!: string;
    cantidad!: string;
    precio!: number;
    dosificacion!: string;
    
    public constructor(partial?: Partial<Medicamento>) {
      Object.assign(this, partial);
    }
}
