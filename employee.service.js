(function(angular) {

  class EmployeeRetriever {
    constructor($http) {
      this.$http = $http;
    }

    retrieve() {
      return this.$http.get('http://localhost:8084/employees');
    }
  }

  angular.module('employeeManager')
    .service('employeeRetriever', EmployeeRetriever);

})(angular);
