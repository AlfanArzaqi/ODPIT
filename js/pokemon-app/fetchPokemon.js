import Pokemon from "./pokemon.js"
import { resolve } from "path"
import { rejects } from "assert"
import fetch from "node-fetch"
import { error } from "console"

export default class fetchPokemon {
    static fetchPokemonData(name) {
        return new Promise ((resolve, rejects) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then (response => {
                if (!response.ok) {
                    throw new Error("Failed get Data")
                }
                return response.json()
            })
            .then(data => {
                const pokemon = new Pokemon(
                    data.name, 
                    data.types[0].type.name, 
                    data.base_experience)
                resolve(pokemon)
            })
            .catch (error => {
                rejects(error)
            })
        }) 
    }
}