(function(angular){
  'use strict';

  class SelectedEmployee {
    constructor() { }
  }

  angular.module('employeeManager')
    .service('selectedEmployee',SelectedEmployee);

})(angular);
