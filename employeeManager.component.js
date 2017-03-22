(function(angular) {
  "use strict";

  class EmployeeManagerController {
    constructor(employeeRetriever,selectedEmployee) {
      employeeRetriever.retrieve()
        .then((response) => {
          this.employees = response.data;
        })
        .catch((err) => {
          console.log(err);
        });

        this.selectedEmployee = selectedEmployee;
    }

    select(newSelected) {
      this.selectedEmployee.current = newSelected;
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
