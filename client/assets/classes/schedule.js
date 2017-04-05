var Schedule = function(){
    this.list = [];
    this.init();
}

Schedule.prototype.insert = function(task, slot){
    //check if any of the following slots are occupied
    for(var i = 0; i < task.blocks; i++){
        if(this.list[slot+i].name){
            console.log("occupied");
            return;
        }
    }

    for(var i = 0; i < task.blocks; i++){
        this.list[slot+i] = task;
    }
};

Schedule.prototype.init = function () {
    var task = {name: "unassigned", blocks: 0};//empty task
    for(var i = 0; i < 96; i++){
        this.list.push(task);
    }

};
