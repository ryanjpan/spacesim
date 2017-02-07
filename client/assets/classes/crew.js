var Crew = function(val){
    this.name = "";
    this.psyhp = val;
    this.coghp = val;
    this.physhp = val;
}

Crew.prototype.useCard = function(task) {
    this.psyhp += task.psychange;
    this.physhp += task.physchange;
    this.coghp += task.cogchange;
    return (this.psyhp < 0 || this.physhp < 0 || this.coghp < 0);
};
