import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Alumno} from './alumno.model';

@model({
  settings :{
    foreignKeys : {
      FK_ACUDIENTE_ID_ALUMNO : {
        name : 'FK_ACUDIENTE_ID_ALUMNO',
        entity : 'Alumno',
        entityKey : 'id',
        foreignKey : 'alumnoId'
      }
    }
  }
})
export class Acudiente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

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
  parentesco: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

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
    type: 'boolean',
    required: true,
  })
  esPrincipal: boolean;

  @belongsTo(() => Alumno, {name: 'ALUMNO'})
  alumnoId: number;

  constructor(data?: Partial<Acudiente>) {
    super(data);
  }
}

export interface AcudienteRelations {
  // describe navigational properties here
}

export type AcudienteWithRelations = Acudiente & AcudienteRelations;
