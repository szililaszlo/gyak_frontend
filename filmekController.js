app.controller("filmekController",function($scope,filmService,$location){

    $scope.films = [];

    $scope.init = function() {
       $scope.getAllFilm();
    };

    $scope.getAllFilm = function() {
        filmService.getAllFilm()
        .then(function(response){
            $scope.films =response.data;
        },
        function(error){
            console.log(error);
        });
    };

    $scope.editFilm = function(film) {
        filmService.editFilm(film)
        .then(
            function(response) {
                $location.url('/filmek');
            },
            function(error) {
                console.log(error);
            }
        );
    };

    $scope.saveAllFilm = function(films) {
        filmService.saveAll(films)
        .then(
            function(response){
                $location.url('/filmek');
            },
            function(error){
                console.log(error);
            }
        )
    };

});