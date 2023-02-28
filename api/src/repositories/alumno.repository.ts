import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Alumno, AlumnoRelations} from '../models';

export class AlumnoRepository extends DefaultCrudRepository<
  Alumno,
  typeof Alumno.prototype.id,
  AlumnoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Alumno, dataSource);
  }
}
