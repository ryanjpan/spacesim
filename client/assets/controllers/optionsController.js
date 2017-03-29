app.controller('optionsController', ['$scope', 'optionsFactory', '$location', '$route',
function(sc, opf, loc, r) {
    sc.options = opf.requestOptions();
    sc.addDestination = function(dest){
        console.log('adding destination');
        opf.addOption('destination', dest);
        loc.url('/newmission');
    }

    sc.addMissionOptions = function(){
        opf.addOptions({
            duration: sc.duration,
            crewsize: sc.crewsize
        });
        //loc.url('/habitat');
        loc.url('/game');

    }

    sc.addHabitatOptions = function(){
        opf.addOptions({
            totvolume: sc.volume,
            layout: sc.layout,
            interior: sc.interior,
            levels: sc.levels,
        });
        loc.url('/interior');
    }

    sc.addInteriorOptions = function(){
        opf.addOptions({
            intvolume: sc.volume,
            habvolume: sc.habitable,
            freedom: sc.freedom,
            sensory: sc.sensory,
            medcare: sc.medcare
        })
        loc.url('/game');
    }


    sc.setDefaultOptions = function(){
        opf.addOptions({
            duration: 2,
            crewsize: 5
        });
        //loc.url('/habitat');
        loc.url('/game');
    }

}]);
