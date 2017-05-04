app.service("mySrc", function(){
    this.add = function(a, b){
        return(a+b);
    }
    
    this.sub = function(a, b){
        return(a-b);
    }
    
    this.multi = function(a, b){
        return(a*b);
    }
    
    this.div = function(a, b){
        return(a/b);
    }
    
    
})