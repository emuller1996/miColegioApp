import {Entity, model, property, hasMany} from '@loopback/repository';
import {Acudiente} from './acudiente.model';

@model()
export class Alumno extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoDocumento: string;

  @property({
    type: 'number',
    required: true,
  })
  numeroDocumento: number;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  departamentoNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudadNacimiento: string;

  @property({
    type: 'string',
  })
  direccionResidencia?: string;

  @property({
    type: 'string',
  })
  barrioResidencia?: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @hasMany(() => Acudiente)
  ACUDIENTES: Acudiente[];

  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
