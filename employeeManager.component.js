(function(angular) {
  "use strict";

  class EmployeeManagerController {
    constructor(employeeRetriever) {
      employeeRetriever.retrieve()
        .then((response) => {
          this.employees = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
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
