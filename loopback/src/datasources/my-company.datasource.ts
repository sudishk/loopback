import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MyCompany',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'mySql@sudish#8021',
  database: 'loop_back_demo_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MyCompanyDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MyCompany';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MyCompany', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
