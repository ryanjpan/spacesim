console.log('loading routes');
var cards = require('./../controllers/cards.js');
var schedule = require('./../controllers/scheduleController.js');

module.exports = function(app){
    app.get('/randomcard', cards.draw);
    app.post('/generateSchedule', schedule.generate);
}
