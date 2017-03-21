(function(angular) {
  "use strict";

  angular.module('employeeManager')
    .component('employeeListItem', {
        templateUrl: 'employee-list-item/employee-list-item.component.html',
        bindings: {
          e: '<employee'
        }
    });

})(angular);
