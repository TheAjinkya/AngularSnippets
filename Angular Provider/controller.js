
app.controller("addCtrl", function($scope, myCalculator){
    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.addition = function(){
        
        $scope.result = myCalculator.add($scope.firstNum, $scope.lastNum);
    }  
    
    $scope.naam = myCalculator.yourName();
})

app.controller("subCtrl", function($scope, myCalculator){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.subtract = function(){
        
        $scope.result = myCalculator.sub($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("multiCtrl", function($scope, myCalculator){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.multi = function(){
        
        $scope.result = myCalculator.multi($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("divCtrl", function($scope, myCalculator){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.div = function(){
        
        $scope.result = myCalculator.div($scope.firstNum, $scope.lastNum);
    }  
})