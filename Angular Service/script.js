
app.controller("addCtrl", function($scope, mySrc){
    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.addition = function(){
        
        $scope.result = mySrc.add($scope.firstNum, $scope.lastNum);
    }  
})

app.controller("subCtrl", function($scope, mySrc){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.subtract = function(){
        
        $scope.result = mySrc.sub($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("multiCtrl", function($scope, mySrc){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.multi = function(){
        
        $scope.result = mySrc.multi($scope.firstNum, $scope.lastNum);
    }  
})


app.controller("divCtrl", function($scope, mySrc){

    $scope.firstNum = ""
    $scope.lastNum = ""
    
    $scope.div = function(){
        
        $scope.result = mySrc.div($scope.firstNum, $scope.lastNum);
    }  
})