app.controller("filmController",function($scope,filmService, $location){
    $scope.film = {};

    $scope.addFilm = function() {
        filmService.createFilm($scope.film)
        .then(function(response) {
            $location.url('/film');
        },
        function (error) {
            console.log(error);
        });
    };
});