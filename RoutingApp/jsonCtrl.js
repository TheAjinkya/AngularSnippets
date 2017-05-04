app.controller("jsonCtrl", function($scope, $http){
    
    $http.get('data.json').then(function(response){
        
        $scope.content = response.data.student
    })
    
})