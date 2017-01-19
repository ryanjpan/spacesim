app.factory('optionsFactory', ['$http', function($http) {
    var options = {};
    function optionsFactory(){
        this.addOption = function(opName, opValue){
            options[opName] = opValue;
        }
        this.addOptions = function(op){
            for(key in op){
                options[key] = op[key];
            }
        }
        this.requestOptions = function(){
            return options;
        }


    }
    return new optionsFactory();
}]);
