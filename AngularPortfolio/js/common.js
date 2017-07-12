$(function(){
    $('.menu li').click(function(){
        $('.menu li').removeClass('active')
        $(this).addClass('active');
    });
})

var app = angular.module('quick',['ngRoute','angularJSTypedEffect','ngAnimate']);

app.config(['$routeProvider',function(routeProvider) {

  routeProvider.when('/',{
    templateUrl : 'about.html',
    controller : 'aboutCtrl'
  })
  .when('/portfolio',{
      templateUrl : 'portfolio.html',
      controller : 'portfolioCtrl'
  })
  .when('/contact',{
      templateUrl : 'contact.html',
      controller : 'contactCtrl'
  })
  .otherwise({
      template : "Не найдено"
  })
}])

app.controller('aboutCtrl', ['$scope','$aboutFactory',function(scope,aboutFactory) {
  
  aboutFactory.get().then(function(response){
      scope.obj = response.data
  })
  
  
                            
}]);

app.factory('$aboutFactory',['$http',function(http){
    return {
        get : function(){
            return http.get('JSON/about.json');
        }
    }
}])

app.factory('$portfolioFactory',['$http',function(http){
    return {
        get : function(){
            return http.get('JSON/portfolio.json');
        }
    }
}])

app.factory('$contactFactory',['$http',function(http){
    return {
        get : function(){
            return http.get('JSON/contact.json');
        }
    }
}])

app.controller('portfolioCtrl', ['$scope','$portfolioFactory', function(scope,portfolioFactory) {
  
  portfolioFactory.get().then(function(response){
      scope.portfolio = response.data
  })
  
   
}]);

app.controller('contactCtrl', ['$scope','$contactFactory', function(scope,contactFactory) {
  
  contactFactory.get().then(function(response){
      scope.contact = response.data
  })
   
}]);




