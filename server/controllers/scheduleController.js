var Tasklist = require('./../classes/Tasklist.js');

function ScheduleController(){
    this.generate = function(req, res){
        console.log(req.body);
        var schedule = new Tasklist();
        schedule.default(); //sets default options
        for(var option in req.body){
            makeSchedule(schedule, option, req.body[option]);
        }
        res.json(schedule);
    }
}

function makeSchedule(schedule, opName, opSelected){
    console.log(opName, opSelected);
    if(opName === 'waterSystem'){
        switch(opSelected){
            case 'A':{
                console.log('Water A selected');
            }break;
            case 'B':{
                console.log('Water B selected');
            }break;
        }
    }
    if(opName === 'oxygenSystem'){
        switch(opSelected){
            case 'A':{
                schedule.insert(0, 'Oxygen A Maintenance', 42, 2);
                schedule.insert(0, 'Oxygen A Maintenance', 90, 2);
            }break;
            case 'B':{
                schedule.insert(4, 'Oxygen B Maintenance', 32, 16);
                schedule.insert(4, 'Oxygen B Maintenance', 52, 4);
            }break;
        }
    }

}
module.exports = new ScheduleController();
