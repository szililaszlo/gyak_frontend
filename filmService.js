app.factory('filmService',function($http) {
    var svc= {};
    var apiURL= "http://localhost:8081/";

    svc.createFilm = function (film) {
        console.log(film)
        return $http.post(apiURL+ 'film',film);
    }

    svc.getAllFilm = function() {
        return $http.get(apiURL+'filmek');
    }

    svc.editFilm = function(film) {
        return $http.put(apiURL+'filmek/'+film.id,film);
    }

    svc.saveAll = function(films){
        return $http.put(apiURL+'all',films);
    }

    return svc;
});