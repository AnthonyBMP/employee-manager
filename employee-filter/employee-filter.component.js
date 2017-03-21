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

  angular.module('employeeManager')
    .component('employeeFilterControls', {
        templateUrl: 'employee-filter/employee-filter.component.html',
        controller: EmployeeFilterController,
        bindings: {
          emitFilter: '&filtered'
        }
    });

})(angular);
