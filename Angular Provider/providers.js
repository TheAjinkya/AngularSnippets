app.provider("myCalculator", function(){
    var greet

    return{

        //        setGreeting : function(value){
        //            
        //            greet = value;
        //        },

        $get : function(){

            return{

                myName : function(){

                    var naam = "This is from Provider"
                    return naam;
                },

                yourName : function(){

                    var YourName = "This is from YourName"
                    return YourName;
                },

                add : function(a, b){
                    return(a+b);
                },

                sub : function(a, b){
                return(a-b);
            },

                multi : function(a, b){
                return(a*b);
            },

                div : function(a, b){
                return(a/b);
            }



        }
    }
}
             })

app.config(function(myCalculatorProvider){
    //    var ajinkya = mySurNameProvider.$get.myName();

})