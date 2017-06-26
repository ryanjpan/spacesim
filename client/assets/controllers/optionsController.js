app.controller('optionsController', ['$scope', 'optionsFactory', '$location', '$route',
function(sc, opf, loc, r) {
    sc.options = opf.requestOptions();
    sc.waterSystems = [
        'A',
        'B'
    ];
    sc.oxygenSystems = [
        'A',
        'B'
    ]

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

    sc.addSystemOptions = function(){
        console.log('adding sytem option');
        if(!sc.waterSystem || !sc.oxygenSystem){
            return;
        }
        var sysOptions = {
            waterSystem: sc.waterSystem,
            oxygenSystem: sc.oxygenSystem,
        }
        console.log(sysOptions);
        opf.addOption('sysOptions', sysOptions);
        loc.url('/schedule');
    }

    sc.printChoice = function(){
        console.log(sc.waterSystem);
        console.log(sc.oxygenSystem);
    }

}]);
