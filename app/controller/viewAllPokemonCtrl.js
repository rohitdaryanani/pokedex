(function () {

    var ViewAllPokemonCtrl = function ( PokemonFactory ) {
            var vm = this;

            PokemonFactory.getAllPokemon()
                .success( function (pokemons) {
                    vm.pokemons = pokemons;
                    console.log(vm.pokemons);
                })
                .error(function (data, status) {
                  console.log(data);
                  console.log(status);
                });
            console.log(PokemonFactory.getAllPokemon());
        };

angular.module('pokedex')
    .controller('ViewAllPokemonCtrl', ViewAllPokemonCtrl);

})();
