(function(angular) {
  "use strict";

  class EmployeeListController {
    constructor() {
      this.selected = '';
    }

    select(emp) {
      this.selected = emp;
      this.emitSelected({
        newSelected: emp
      });
    }
  }

  angular.module('employeeManager')
    .component('employeeList', {
        templateUrl: 'employee-list/employee-list.component.html',
        controller: EmployeeListController,
        bindings: {
          employees: "<emps",
          filter: "<",
          emitSelected: '&selected'
        }
    });

})(angular);
