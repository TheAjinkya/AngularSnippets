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

app.directive('carousel', function(){

    return{
        
        restrict : 'E',

     template : '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li><li data-target="#carousel-example-generic" data-slide-to="1"></li><li data-target="#carousel-example-generic" data-slide-to="2"></li></ol> <div class="carousel-inner"> <div class="item active"> <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="First slide"> <div class="header-text hidden-xs"> <div class="col-md-12 text-center"> <h2> <span>Welcome to <strong>LOREM IPSUM</strong></span> </h2> <br><h3> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </h3> <br><div class=""> <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div></div></div></div><div class="item"> <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Second slide"> <div class="header-text hidden-xs"> <div class="col-md-12 text-center"> <h2> <span>Welcome to LOREM IPSUM</span> </h2> <br><h3> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </h3> <br><div class=""> <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div></div></div></div><div class="item"> <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Third slide"> <div class="header-text hidden-xs"> <div class="col-md-12 text-center"> <h2> <span>Welcome to LOREM IPSUM</span> </h2> <br><h3> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </h3> <br><div class=""> <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div></div></div></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a> </div></div>'
        
       
    }
})