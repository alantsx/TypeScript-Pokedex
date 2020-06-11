"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById("app");
const pokemons = 100;
const fetchData = () => {
    for (let i = 1; i <= pokemons; i++) {
        getPokemon(i);
    }
};
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = yield data.json();
    const pokemonType = pokemon.types
        .map((poke) => poke.type.name)
        .join(", ");
    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType,
    };
    showPokemon(transformedPokemon);
});
const showPokemon = (pokemon) => {
    let output = `<div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt =${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <span class="card--details">${pokemon.type}</span>
            </div>`;
    container.innerHTML += output;
};
fetchData();
