(function () {

    var PokemonFactory = function ( $http ) {
           var factory = {};

           factory.getAllPokemon = function () {
                return $http.get('http://pokeapi.co/api/v1/pokedex/1/');
           };

           return factory;
    };

    angular.module( 'pokedex' )
        .factory( 'PokemonFactory', PokemonFactory);

})();
