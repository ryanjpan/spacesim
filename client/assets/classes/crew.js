var Crew = function(val){
    this.name = "";
    this.psyhp = val;
    this.coghp = val;
    this.physhp = val;
    this.busy = false;
    this.currentTask = "";
    this.taskTimeLeft = 0;
}

Crew.prototype.useCard = function(task) {
    this.currentTask = task.name;
    this.taskTimeLeft = task.blocks;
    this.busy = true;
    this.psyhp += task.psychange;
    this.physhp += task.physchange;
    this.coghp += task.cogchange;
};

Crew.prototype.tick = function () {
    this.taskTimeLeft--;
    if(this.taskTimeLeft <= 0){
        this.busy = false;
        this.currentTask = "";
        return(this.psyhp < 0 || this.physhp < 0 || this.coghp < 0);
    }
    return false;
};
