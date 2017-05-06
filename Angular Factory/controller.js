
app.controller("addCtrl", function($scope, myFactory){
    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.addition = function(){
        
        $scope.result = myFactory.add($scope.firstNum, $scope.lastNum);
    }  
    
    $scope.naam = myFactory.display();
})

app.controller("subCtrl", function($scope, myFactory){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.subtract = function(){
        
        $scope.result = myFactory.sub($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("multiCtrl", function($scope, myFactory){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.multi = function(){
        
        $scope.result = myFactory.multi($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("divCtrl", function($scope, myFactory){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.div = function(){
        
        $scope.result = myFactory.div($scope.firstNum, $scope.lastNum);
    }  
})