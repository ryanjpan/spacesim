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
        if(sc.timeblock % 96 == 0){
            sc.day += 1;
        }
        for(var i=0; i < sc.crewmembers.length; i++){
            if(sc.crewmembers[i].tick()){
                sc.score += sc.crewmembers[i].currentTask.points;
            }
        }
    }
    //END PRIVATE

    //INITIALIZATIONS
    sc.crewmembers = [];
    sc.cards = [];
    sc.cardInd = 0;
    sc.day = 0;
    sc.timeblock = 0;
    sc.score = 0;
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
        blocktimer = undefined;
    }

    sc.resume = function(){
        if(blocktimer){
            return;
        }
        blocktimer = int(tick, 1000);
    }

}
