(function(angular) {
  "use strict";

  class EmployeeDetailController {
    constructor(selectedEmployee,employeeRetriever,companyInfo) {
      this.selectedEmployee = selectedEmployee;
      this.employeeRetriever = employeeRetriever;
      this.companyInfo = companyInfo;
    }

    $onChanges(changes) {
      this.companyInfo.getCompanyName(this.selectedEmployee.current.id)
        .then(name => this.company = name);
    }

    seeManager() {
      this.employeeRetriever.retrieve()
        .then((response) => {
          let employees = response.data;
          let index = this.selectedEmployee.current.id;

          if(index >= employees.length)
            index = 0;

          this.selectedEmployee.current = employees[index];
        })
    }
  }

  angular.module('employeeManager')
    .component('employeeDetail', {
        templateUrl: 'employee-detail/employee-detail.component.html',
        controller: EmployeeDetailController,
        bindings: {
          emp: '<employee'
        }
    });

})(angular);
