var app = angular.module("myApp", [])


app.controller("myCtrl", function($scope){
    
    $scope.firstName = "Ajinkya"
    $scope.lastName = "Chanshetty"
    $scope.contact = 9960282703
    $scope.email = "aajinkya@hotmail.com"
    
})

app.directive('myDirective', function(){
    
    var directive = {};
    
    directive.restrict : "E",
    directive.template : '<h1> Hey Ajinkya!! </h1>'   
        
    return directive;
    

})