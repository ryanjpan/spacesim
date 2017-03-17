var Crew = function(val){
    this.name = "";
    this.psyhp = val;
    this.coghp = val;
    this.physhp = val;
    this.busy = false;
    this.currentTask = undefined;
    this.taskTimeLeft = 0;
    this.tasksCompleted = [];
}

Crew.prototype.useCard = function(task) {
    this.currentTask = task;
    this.taskTimeLeft = task.blocks;
    this.busy = true;
};

Crew.prototype.tick = function () { // returns whether now free
    if(!this.busy){
        return;
    }
    this.taskTimeLeft--;
    this.psyhp += this.currentTask.psychange / this.currentTask.blocks;
    this.physhp += this.currentTask.physchange / this.currentTask.blocks;
    this.coghp += this.currentTask.cogchange / this.currentTask.blocks;
    if(this.taskTimeLeft <= 0){
        this.tasksCompleted.push(this.currentTask);
        this.busy = false;
        return true;
    }
    return false;
};

Crew.prototype.isDead= function () {
    return(this.psyhp < 0 || this.physhp < 0 || this.coghp < 0);
};
