import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const dotenv = require('dotenv').config();


const config = {
  name: 'mysql',
  connector: 'mysql',
  url: '',
  host: process.env.MYSQLHOST || 'containers-us-west-30.railway.app' || 'localhost' ,
  port:process.env.MYSQLPORT || 7173,
  user: process.env.root ||'root',
  password:process.env.MYSQLPASSWORD|| 'mnQt8BH1Z1y8NyPHmH0R',
  database: process.env.MYSQLDATABASE ||'railway'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
