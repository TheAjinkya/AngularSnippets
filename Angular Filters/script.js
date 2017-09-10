var app = angular.module("myApp", [])


app.filter('capitalize', function() {
  return function(x) {
    if (x!=null)
    return x.substring(0,1).toUpperCase()+x.substring(1);
  }
});


app.filter('lowerCase', function() {
  return function(input) {
    if (input!=null)
    return input.substring(0,1).toLocaleLowerCase() +input.substring(1).toUpperCase();
  }
});

app.controller("myCtrl", function($scope){
    
    $scope.names = ['Ajinkya', 'Apurva', 'priyanka', 'sandip', 'gopal', 'neha']
  
    
})

