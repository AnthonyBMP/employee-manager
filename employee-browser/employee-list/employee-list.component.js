(function(angular) {
  "use strict";

  class EmployeeListController {
    constructor(selectedEmployee) {
      this.selectedEmployee = selectedEmployee;
    }

    select(emp) {
      this.selectedEmployee.current = emp;
    }
  }

  angular.module('employeeBrowser')
    .component('employeeList', {
        templateUrl: 'employee-browser/employee-list/employee-list.component.html',
        controller: EmployeeListController,
        bindings: {
          employees: "<emps",
          filter: "<"
        }
    });

})(angular);
