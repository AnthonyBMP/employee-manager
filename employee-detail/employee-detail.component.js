(function(angular) {
  "use strict";

  angular.module('employeeManager')
    .component('employeeDetail', {
        templateUrl: 'employee-detail/employee-detail.component.html',
        bindings: {
          emp: '<employee'
        }
    });

})(angular);
