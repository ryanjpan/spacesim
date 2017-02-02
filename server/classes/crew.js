var Crew = function(){
    this.name = "";
    this.psyhp = 100;
    this.coghp = 100;
    this.physhp = 100;
}

Crew.prototype.useCard = function(task) {
    this.psyhp += task.psychange;
    this.coghp += task.cogchange;
    this.physhp += task.physchange;
};
