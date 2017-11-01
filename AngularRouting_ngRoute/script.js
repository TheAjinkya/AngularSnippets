var app = angular.module("myApp", ["ngRoute"])

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
        templateUrl : "home.html",
        controller : "yourController",

        resolve : {

            accomodation : function($q, $timeout){

                var myFriend = $q.defer();

                $timeout(function(){

                    myFriend.resolve({

                        hotelName : function(){

                            return "Hotel Taj"
                        },

                        roomNumber : function(){

                            return "2109 Twenty First Floor "
                        }

                    });


                }, 5000);

                return myFriend.promise;

            }


        }
    })

        .when('/new', {
        templateUrl : "about.html",
        controller : "newController"
    })


        .when('/ajinkya', {
        templateUrl : "products.html",
        controller : "myController",
        resolve : {

            myfriend : function(){

                return{

                    hotelName : function(){

                        return "Le Meridian Hotel"
                    },

                    roomNumber : function(){

                        return "1009 Elevnth Floor "
                    }

                }
            }
        }

    })

        .when('/aa', {

        redirectTo : '/ajinkya'
    })




})

app.factory("myService", function(){


    return {

        hotelName : function(){


            return "Some Hotel JWM"


        },

        roomNumber : function(){

            return "1205 Twelth Floor"
        }

    }




})

app.controller("myController", function($scope, myfriend, $routeParams){

    $scope.name = "Ajinkya"
    $scope.hotelName = myfriend.hotelName()
    $scope.roomNumber = myfriend.roomNumber()

})


app.controller("newController", function($scope, myService){

    $scope.name = "Mr. Bachhan"
    $scope.hotelName = myService.hotelName()
    $scope.roomNumber = myService.roomNumber()


})


app.controller("yourController", function($scope, accomodation){

    $scope.name = "Don"
    $scope.hotelName = accomodation.hotelName()
    $scope.roomNumber = accomodation.roomNumber()

    

})

