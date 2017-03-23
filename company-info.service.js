(function(angular){
  'use strict';

  class CompanyInfo {
    constructor($http,$q) {
      this.$http = $http;
      this.$q = $q;
    }

    getCompanyInfoForEmp(id) {
      return this.$http.get('/api/companies')
        .then(res => {
          return res.data;
        })
        .then(companies => {
          if(id % 3 === 0)
            return companies[0];
          else if(id % 3 === 1)
            return companies[1];
          else
            return companies[2];
        });
    }

    getColorForEmp(id) {
      return this.$http.get('/api/colors')
        .then(res => res.data)
        .then(colors => {
          if(id % 3 === 0)
            return colors[0];
          else if(id % 3 === 1)
            return colors[1];
          else
            return colors[2];
        });
    }

    getCompanyName(id) {
      let companyPromise = this.getCompanyInfoForEmp(id).then(r => r);
      let colorPromise = this.getColorForEmp(id).then(r => r);

      return this.$q.all([companyPromise,colorPromise])
        .then(res => {
          return res[1] + ' ' + res[0].name;
        });
    }
  }

  angular.module('employeeManager')
    .service('companyInfo',CompanyInfo);

})(angular);
