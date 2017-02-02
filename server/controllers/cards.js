var cards = require('./../tasks/tasks.js');

function CardsController(){
    this.draw = function(req, res){
        var card = cards.randCard(Math.floor(Math.random()*27) + 1);
        //console.log(card);
        res.json(card);
    }
}

module.exports = new CardsController();
