app.config(function($routeProvider)
        {
    $routeProvider
    .when('/', {templateUrl: "home.html"})
    
    .when('/twoWay', {templateUrl: "twoWay.html"})
    
    .when('/json', {templateUrl: "json.html"})
    
    .when('/form', {templateUrl: "form.html"})
    
    .when('/service', {templateUrl: "service.html"});
})