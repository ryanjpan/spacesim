app.controller('gameController', ['$scope', 'optionsFactory', '$location', '$route', '$http', '$sce', GameController]);

function GameController(sc, opf, loc, r, http, sce) {
    //this.options = opf.requestOptions();
    this.options = {
        crewsize: 5,
        duration: 2
    }
    var self = this;
    function newPhase(){
        console.log(self.options);
        delete sc.selectedcrew;
        sc.cards = [];
        if(sc.phase == 2){
            sc.day++;
            if(sc.day >= self.options.duration){
                loc.url('/win');
            }
            sc.phase = 0;
        }
        else{
            sc.phase++;
        }
        switch(sc.phase){
            case 0: sc.timeOfDay = "Morning"; break;
            case 1: sc.timeOfDay = "Afternoon"; break;
            case 2: sc.timeOfDay = "Night"; break;
        }
        for(var i = 0; i < sc.crewmembers.length; i++){
            http.get('/randomcard').then(function(jsonObj){
                sc.cards.push(jsonObj.data);
            })
        }
        sc.availableCrew = sc.crewmembers.slice(0, sc.crewmembers.length);
        sc.cardInd = 0;
    }
    //INITIALIZATIONS
    sc.crewmembers = [];
    sc.cardInd = 0;
    sc.day = 0;
    sc.phase = 0;
    this.startGame(sc);
    newPhase();
    //END INITIALIZATIONS

    sc.assign = function(selectedcrew){
        if(!selectedcrew){
            return;
        }
        if(selectedcrew.useCard(sc.cards[sc.cardInd])){
            loc.url('/lose')
        }
        for(var i = 0; i < sc.availableCrew.length; i++){
            if(selectedcrew == sc.availableCrew[i]){
                sc.availableCrew.splice(i, 1);
                break;
            }
        }
        sc.cardInd++;
        if(sc.cardInd >= sc.crewmembers.length){
            newPhase();
        }
    }

}
