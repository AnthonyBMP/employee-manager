(function(angular) {
  "use strict";

  class EmployeeManagerController {
    constructor(employeeRetriever) {
      this.employees = employeeRetriever.retrieve();
    }

    select(newSelected) {
      this.selectedEmployee = newSelected;
    }

    setFilter(f) {
      this.filter = f;
    }
  }
  
  angular.module('employeeManager')
    .component('employeeManager', {
      controller: EmployeeManagerController,
      templateUrl: 'employeeManager.component.html'
    });

})(angular);
