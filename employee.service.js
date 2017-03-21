(function(angular) {

  class EmployeeRetriever {
    retrieve() {
      return ['Judd','Karen','Lindsay','Scott','Trish','Anthony'];
    }
  }

  angular.module('employeeManager',[])
    .service('employeeRetriever', EmployeeRetriever);

})(angular);
