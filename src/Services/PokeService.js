import axios from "axios";

export class PokeService {

    static getPokemon(pokemon){
        let dataUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        return axios.get(dataUrl);
    }
}