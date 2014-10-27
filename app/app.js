(function () {
    angular
        .module('pokedex', ['ngRoute'])
        .config(function ( $routeProvider ) {
            $routeProvider
                .when( '/', {
                    controller  : 'ViewAllPokemonCtrl as vm',
                    templateUrl : '/app/views/view-all.html'
                })
                .otherwise({
                    redirectTo : '/'
                });
        });
})();
