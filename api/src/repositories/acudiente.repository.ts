import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Acudiente, AcudienteRelations, Alumno} from '../models';
import {AlumnoRepository} from './alumno.repository';

export class AcudienteRepository extends DefaultCrudRepository<
  Acudiente,
  typeof Acudiente.prototype.id,
  AcudienteRelations
> {

  public readonly ALUMNO: BelongsToAccessor<Alumno, typeof Acudiente.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('AlumnoRepository') protected alumnoRepositoryGetter: Getter<AlumnoRepository>,
  ) {
    super(Acudiente, dataSource);
    this.ALUMNO = this.createBelongsToAccessorFor('ALUMNO', alumnoRepositoryGetter,);
    this.registerInclusionResolver('ALUMNO', this.ALUMNO.inclusionResolver);
  }
}
