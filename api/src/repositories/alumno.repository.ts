import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Alumno, AlumnoRelations, Acudiente} from '../models';
import {AcudienteRepository} from './acudiente.repository';

export class AlumnoRepository extends DefaultCrudRepository<
  Alumno,
  typeof Alumno.prototype.id,
  AlumnoRelations
> {

  public readonly ACUDIENTES: HasManyRepositoryFactory<Acudiente, typeof Alumno.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('AcudienteRepository') protected acudienteRepositoryGetter: Getter<AcudienteRepository>,
  ) {
    super(Alumno, dataSource);
    this.ACUDIENTES = this.createHasManyRepositoryFactoryFor('ACUDIENTES', acudienteRepositoryGetter,);
    this.registerInclusionResolver('ACUDIENTES', this.ACUDIENTES.inclusionResolver);
  }
}
