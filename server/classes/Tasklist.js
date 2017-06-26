console.log('Setting up Tasklists');
var Tasklist = function(){ // 15 minute time blocks
    this.arr = []; // 2d array for tasks, one week
    this.init();
}

Tasklist.prototype.init = function () {
    var task = "";//empty task
    var day = [];
    for(var i = 0; i < 96; i++){
        day.push(task);
    }
    for(var i = 0; i < 7; i++){
        var newDay = day.slice(0, day.length);
        this.arr.push(newDay);
    }
};

Tasklist.prototype.insert = function(day, task, slot, numBlocks){
    for(var i = 0; i < numBlocks; i++){
        this.arr[day][slot+i] = task;
    }
};

Tasklist.prototype.default = function(){
    for(var i = 0; i < 7; i++){
        this.insert(i, 'Sleep', 0, 28);
        this.insert(i, 'Eating', 28, 2);
        this.insert(i, 'Personal Hygiene', 30, 1);
        this.insert(i, 'Eating', 48, 2);
        this.insert(i, 'Eating', 64, 2);
        this.insert(i, 'Exercise', 72, 8);
        this.insert(i, 'Personal Hygiene', 80, 2);
        this.insert(i, 'Sleep', 92, 4);
    }
}

Tasklist.prototype.getSchedule = function(){
    return this.arr;
}

module.exports = Tasklist;
