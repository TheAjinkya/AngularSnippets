app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home")

    $stateProvider
        .state('home', {
        'url': '/home',
        templateUrl : 'home.html'

    })

        .state('about', {
        'url': '/about',
        templateUrl : 'about.html'

    })

        .state('product', {
        'url': '/product',
        templateUrl : 'product.html'

    })

        .state('contact', {
        'url': '/contact',
        templateUrl : 'contact.html'

    })

})