(function(angular) {

  class EmployeeRetriever {
    constructor($http) {
      this.$http = $http;
    }

    retrieve() {
      if(!this.cache) {
        this.cache = this.$http.get('http://localhost:8084/employees');
      }

      return this.cache;
    }

    addEmployee(employee) {
      this.$http.post('http://localhost:8084/employees', {
        first_name: employee.name.split(' ')[0],
        last_name: employee.name.split(' ')[1],
        email: employee.email,
        hours_worked: employee.hours,
        hourly_wage: employee.wage
      });
    }
  }

  angular.module('employeeManager')
    .service('employeeRetriever', EmployeeRetriever);

})(angular);
