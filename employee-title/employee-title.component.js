(function(angular){
  'use strict';

  angular.module('employeeManager')
    .component('employeeTitle',{
      template: '<h3>{{$ctrl.first}}  {{$ctrl.last}}',
      bindings: {
        first: '@',
        last: '@'
      }
    });

})(angular);
