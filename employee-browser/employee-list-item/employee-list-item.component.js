(function(angular) {
  "use strict";

  angular.module('employeeBrowser')
    .component('employeeListItem', {
        templateUrl: 'employee-browser/employee-list-item/employee-list-item.component.html',
        bindings: {
          e: '<employee'
        }
    });

})(angular);
