app.controller('gameController', ['$scope', 'optionsFactory', '$location', '$route', '$http', '$sce', '$interval', GameController]);

function GameController(sc, opf, loc, r, http, sce, int) {
    //this.options = opf.requestOptions();
    this.options = {
        crewsize: 5,
        duration: 2
    }

    //PRIVATE

    function tick(){
        sc.timeblock++;
        for(var i=0; i < sc.crewmembers.length; i++){
            sc.crewmembers[i].tick();
        }
    }
    //END PRIVATE

    //INITIALIZATIONS
    sc.crewmembers = [];
    sc.cards = [];
    sc.cardInd = 0;
    sc.day = 0;
    sc.timeblock = 0;
    this.startGame(sc, http);
    var blocktimer;
    //END INITIALIZATIONS

    sc.assign = function(selectedcrew, cardIndex){
        console.log(cardIndex);
        if(!selectedcrew || selectedcrew.busy){
            return;
        }
        selectedcrew.useCard(sc.cards[cardIndex]);
        sc.cards.splice(cardIndex, 1);
        http.get('/randomcard').then(function(jsonObj){
            sc.cards.push(jsonObj.data);
        })
        selectedcrew = "";
    }

    sc.pause = function(){
        int.cancel(blocktimer);
    }

    sc.resume = function(){
        blocktimer = int(tick, 1000);
    }

}
