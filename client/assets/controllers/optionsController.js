app.controller('optionsController', ['$scope', 'optionsFactory', '$location', '$route',
function(sc, opf, loc, r) {
    sc.options = opf.requestOptions();
    sc.addDestination = function(dest){
        console.log('adding destionation');
        opf.addOption('destination', dest);
        loc.url('/newmission');
    }

    sc.addMissionOptions = function(){
        opf.addOptions({
            duration: sc.duration,
            crewsize: sc.crewsize
        });
        loc.url('/habitat');
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
        loc.url('/task');
    }

}]);
