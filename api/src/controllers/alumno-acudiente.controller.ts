import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Alumno,
  Acudiente,
} from '../models';
import {AlumnoRepository} from '../repositories';

export class AlumnoAcudienteController {
  constructor(
    @repository(AlumnoRepository) protected alumnoRepository: AlumnoRepository,
  ) { }

  @get('/alumnos/{id}/acudientes', {
    responses: {
      '200': {
        description: 'Array of Alumno has many Acudiente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Acudiente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Acudiente>,
  ): Promise<Acudiente[]> {
    return this.alumnoRepository.ACUDIENTES(id).find(filter);
  }

  @post('/alumnos/{id}/acudientes', {
    responses: {
      '200': {
        description: 'Alumno model instance',
        content: {'application/json': {schema: getModelSchemaRef(Acudiente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Alumno.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acudiente, {
            title: 'NewAcudienteInAlumno',
            exclude: ['id'],
            optional: ['alumnoId']
          }),
        },
      },
    }) acudiente: Omit<Acudiente, 'id'>,
  ): Promise<Acudiente> {
    return this.alumnoRepository.ACUDIENTES(id).create(acudiente);
  }

  @patch('/alumnos/{id}/acudientes', {
    responses: {
      '200': {
        description: 'Alumno.Acudiente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acudiente, {partial: true}),
        },
      },
    })
    acudiente: Partial<Acudiente>,
    @param.query.object('where', getWhereSchemaFor(Acudiente)) where?: Where<Acudiente>,
  ): Promise<Count> {
    return this.alumnoRepository.ACUDIENTES(id).patch(acudiente, where);
  }

  @del('/alumnos/{id}/acudientes', {
    responses: {
      '200': {
        description: 'Alumno.Acudiente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Acudiente)) where?: Where<Acudiente>,
  ): Promise<Count> {
    return this.alumnoRepository.ACUDIENTES(id).delete(where);
  }
}
