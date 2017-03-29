var Crew = function(val)
{   this.name = "";
    this.psyhp = val;
    this.coghp = val;
    this.physhp = val;
    this.busy = false;
    this.currentTask = undefined;
    this.taskTimeLeft = 0;
    this.tasksCompleted = [];
    this.taskQueue = [];
    this.points = 0;
}

Crew.prototype.useCard = function(task) {
    if(this.busy){
        this.addToQueue(task);
        return;
    }
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
        this.points += this.currentTask.points;
        this.tasksCompleted.push(this.currentTask);
        if(this.taskQueue.length > 0){
            this.currentTask = this.taskQueue[0];
            this.taskTimeLeft = this.currentTask.blocks;
            this.taskQueue.splice(0,1);
            return;
        }
        this.busy = false;
        return true;
    }
    return false;
};

Crew.prototype.addToQueue = function (task) {
    this.taskQueue.push(task);
};

Crew.prototype.isDead= function () {
    return(this.psyhp < 0 || this.physhp < 0 || this.coghp < 0);
};
