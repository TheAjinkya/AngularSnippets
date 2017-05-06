

app.factory("myFactory", function(){
    
    var randomFactory = {}
    
    var myName = "This from Factory" 
    
    randomFactory.display = function(){
        
        return myName
    }
    
    randomFactory.add = function(a, b){
        return(a+b);
    }
    
    randomFactory.sub = function(a, b){
        return(a-b);
    }
    
    randomFactory.multi = function(a, b){
        return(a*b);
    }
    
    randomFactory.div = function(a, b){
        return(a/b);
    }
    
    
    return randomFactory;
    
    
})