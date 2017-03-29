GameController.prototype.test = function () {

};

GameController.prototype.startGame = function(sc, http) {
    for(var i = 0; i < this.options.crewsize; i++){
        var crew = new Crew(20);
        crew.name = "Crew " + i;
        sc.crewmembers.push(crew);
        http.get('/randomcard').then(function(jsonObj){
            sc.cards.push(jsonObj.data);
        })
    }
    sc.phase = -1;
};
