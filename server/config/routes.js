console.log('loading routes');
var cards = require('./../controllers/cards.js')

module.exports = function(app){
    app.get('/randomcard', cards.draw);
}
