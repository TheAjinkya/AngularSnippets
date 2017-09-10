var app = angular.module("myApp", [])

app.controller('mydirective', function($scope){

    $scope.name = "Element"
})

app.controller('attributeController', function($scope){

    $scope.name = "Attribute"
})



app.controller('classController', function($scope){

    $scope.name = "Class"
})


app.controller('commentController', function($scope){

    $scope.name = "Comment"
})


app.directive('myDirective', function(){

    return{
        restrict : "E",
        template : '<h3> This is the {{name}} Type Directive </h3>'   
    }
})


app.directive('classDirective', function(){

    return{
        restrict : "C",
        template : '<h3> This is the {{name}} type Directive</h3>'   
    }
})

app.directive('yourDirective', function(){

    return{
        restrict : "A",
        template : '<h3> This is the {{name}} type Directive</h3>'   
    }
})


app.directive('newDirective', function(){

    return{
        restrict : "M",
        template : '<h3> This is the {{name}} type Directive</h3>',
        replace : true

    }
})