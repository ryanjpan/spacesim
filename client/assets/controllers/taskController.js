app.controller('taskController', ['$scope', 'optionsFactory', '$location', '$route', '$http', TaskController]);

function TaskController(sc, opf, loc, r, http) {
    var sysOptions = opf.requestOneOption('sysOptions');
    http.post('/generateSchedule', sysOptions).then(function(json){
        sc.schedule = json.data.arr;
    })

    sc.getNumber = function(num){
        return new Array(num);
    }
    sc.generateTime = function(blocknum){
        var hour, minute;
        if(blocknum%4 == 0){
            minute = '00';
        }
        else{
            minute = blocknum%4 * 15;
        }
        hour = Math.floor(blocknum/4)
        if(hour < 10){
            hour = `0${hour}`;
        }
        return(`${hour}:${minute}`);
    }
}
