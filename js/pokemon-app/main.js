import fetchPokemon from "./fetchPokemon.js";
import Trainer from "./trainer.js";
import Pokemon from "./pokemon.js";
import { error } from "console";

const ash = new Trainer('Ash')

Promise.all([
    fetchPokemon.fetchPokemonData('pikachu'),
    fetchPokemon.fetchPokemonData('mew'),
    fetchPokemon.fetchPokemonData('gyarados'),
])

.then(data => {
    data.forEach(pokemon => {
        ash.addPokemon(pokemon)
    })

    ash.displayPokemon()
})
.catch(error => {
    console.log("Error");
})