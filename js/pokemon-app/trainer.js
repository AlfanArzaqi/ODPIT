export default class Trainer {
    constructor (name) {
        this.name = name
        this.pokemonList = []
    }

    addPokemon (pokemon) {
        this.pokemonList.push(pokemon)
    }
    
    displayPokemon () {
        console.log(`${this.name} -  List Pokemon : `);
        this.pokemonList.forEach(pokemon => pokemon.displayInfo());
    }

}