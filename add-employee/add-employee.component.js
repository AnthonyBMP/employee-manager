(function(angular){
  'use strict';

  class AddEmployeeController {
    constructor(employeeRetriever) {
      this.employeeRetriever = employeeRetriever;
    }

    addEmp() {
      this.employeeRetriever.addEmployee({
        name: this.name,
        email: this.email,
        hours: this.hours,
        wage: this.wage
      });
    }
  }

  angular.module('employeeManager')
    .component('addEmployeeForm', {
      templateUrl: 'add-employee/add-employee.component.html',
      controller: AddEmployeeController
    });

})(angular);
