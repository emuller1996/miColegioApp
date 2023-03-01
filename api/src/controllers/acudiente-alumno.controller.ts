import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Acudiente,
  Alumno,
} from '../models';
import {AcudienteRepository} from '../repositories';

export class AcudienteAlumnoController {
  constructor(
    @repository(AcudienteRepository)
    public acudienteRepository: AcudienteRepository,
  ) { }

  @get('/acudientes/{id}/alumno', {
    responses: {
      '200': {
        description: 'Alumno belonging to Acudiente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Alumno)},
          },
        },
      },
    },
  })
  async getAlumno(
    @param.path.number('id') id: typeof Acudiente.prototype.id,
  ): Promise<Alumno> {
    return this.acudienteRepository.ALUMNO(id);
  }
}
