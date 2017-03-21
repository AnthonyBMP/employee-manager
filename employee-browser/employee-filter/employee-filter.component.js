(function(angular) {
  "use strict";

  class EmployeeFilterController {
    constructor() {
      this.filterCrit = '';
    }

    setFilter() {
      this.emitFilter({
        newFilter: this.filterCrit
      });
    }    
  }

  angular.module('employeeBrowser')
    .component('employeeFilterControls', {
        templateUrl: 'employee-browser/employee-filter/employee-filter.component.html',
        controller: EmployeeFilterController,
        bindings: {
          emitFilter: '&filtered'
        }
    });

})(angular);
