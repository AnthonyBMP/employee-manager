(function(angular){
  'use strict';
  
  angular.module('validators')
    .directive('mustContainSpace', () => {
      const link = (scope, elm, attrs, modelController) => {
        modelController.$validators.containsSpace = (modelValue, viewValue) => {
          return modelController.$isEmpty(modelValue) || modelValue.indexOf(' ') > -1;
        };
      };

      return {
        require: 'ngModel',
        restrict: 'A',
        link
      };
    });
    
})(angular);
