var app = angular.module("myApp", ['ngResource'])

app.service("userService", function($resource){
    
    return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
})

app.controller("myCtrl", function($scope, userService){
    
        $scope.users = userService.query();
    
    $scope.setDataForUser = function(userID){
        
        $scope.currentUser = userService.get({user: userID})
}
    
    $scope.addUser = function(){
        
        userService.add({name: 'Ajinkya', email: 'aajinkya@hotmail.com' })
    }

})


