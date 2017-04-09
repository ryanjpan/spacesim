app.controller('gameController', ['$scope', 'optionsFactory', '$location', '$route', '$http', '$sce', '$interval', GameController]);

function GameController(sc, opf, loc, r, http, sce, int) {
    this.options = opf.requestOptions();

    //PRIVATE

    function tick(){
        sc.timeblock++;
        for(var i=0; i < sc.crewmembers.length; i++){
            if(sc.crewmembers[i].tick()){
                sc.score += sc.crewmembers[i].currentTask.points;
                if(sc.crewmembers[i].isDead()){
                    console.log(sc.crewmembers[i].name + ' died');
                    loc.url('/lose');
                }
            }
        }
        if(sc.timeblock % 96 == 0){ // day change
            sc.day += 1;
            sc.timeblock = 0;
            if(sc.day >= self.options.duration){
                loc.url('/win');
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
    sc.switch = 'game';
    sc.crewStatInd = 0;
    this.startGame(sc, http);
    var self = this;
    var blocktimer;
    sc.currCard = "";
    sc.currIndex = "";
    //END INITIALIZATIONS

    sc.assign = function(selectedcrew){

        if(!selectedcrew){
            return;
        }

        if(sc.cardIndex > -1){
            selectedcrew.useCard(sc.cards[sc.cardIndex]);
            sc.cards.splice(sc.cardIndex, 1);
            http.get('/randomcard').then(function(jsonObj){
                sc.cards.push(jsonObj.data);
            })
            selectedcrew = "";
        }

        sc.currCard = "";
        sc.cardIndex = -1;
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

    sc.returnToGame = function(){
        sc.switch = 'game';
        sc.resume();
    }

    sc.toCrewStat = function(index){
        sc.switch = 'singleCrewStat';
        sc.crewStatInd = index;
        sc.pause();
    }

    sc.setCurrAssignment = function(myCard, cardIndex){
        sc.currCard = myCard;
        sc.cardIndex = cardIndex;
    }

}
