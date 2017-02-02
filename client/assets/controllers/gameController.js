app.controller('gameController', ['$scope', 'optionsFactory', '$location', '$route', '$http', '$sce',
function(sc, opf, loc, r, http, sce) {
    var cardsHtmlStr = "";
    sc.cardsHtml = "";
    sc.newCard = function(){
        http.get('/randomcard').then(function(jsonObj){
            var json = jsonObj.data;
            cardsHtmlStr += `<div class=\"card\">
            <h4>${json.name}</h4>
            <p>${json.desc} </p>

            <p>
            cogchange: ${json.cogchange} <br>
            physchange: ${json.physchange} <br>
            psychange: ${json.psychange}
            </p>

            </div>`;

            sc.cardsHtml = sce.trustAsHtml(cardsHtmlStr);
            console.log(cardsHtmlStr);
        })
    }
}]);
