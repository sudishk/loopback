import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MyCompanyDataSource} from '../datasources';
import {Employee, EmployeeRelations} from '../models';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.MyCompany') dataSource: MyCompanyDataSource,
  ) {
    super(Employee, dataSource);
  }
}
