GameController.prototype.test = function () {

};

GameController.prototype.startGame = function(sc) {
    for(var i = 0; i < this.options.crewsize; i++){
        var crew = new Crew(20);
        crew.name = "Crew " + i;
        sc.crewmembers.push(crew);
    }
    sc.phase = -1;
};
