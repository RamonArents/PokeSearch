<template>
  <div class="md-5 position-absolute">
    <div :class="{info: isOk}" v-if="isOk">
      <p>Name: {{ name }}</p>
      <p>Type: {{ type }}</p>
      <p>Abilities: <span v-for="ability in abilities">{{ ability.ability.name }}&nbsp;</span></p> 
      <img :src="image" />
    </div>
    <div v-else-if="errorMessage">
      <p :name="pokemon">Sorry, this pokemon doesn't seem to exist.</p>
    </div>
    <input class="mt-3" id="search" v-model="pokemon" @keyup.enter="getPokemon()" type="search" placeholder="Search for Pokemon" />
  </div>
</template>

<script>
import { PokeService } from '@/Services/PokeService';

export default {
  name: "Search",
  data: function(){
    return {
      pokemon: null,
      name: ' ',
      type: ' ',
      image: ' ',
      abilities: null,
      errorMessage: null,
      isOk: false,
    };
  },
  methods:{
    async getPokemon(){
      try{
        let response = await PokeService.getPokemon(this.pokemon.toLowerCase());
        this.name = response.data.name;
        this.type = response.data.types[0].type.name;
        this.abilities = response.data.abilities;
        this.image = response.data.sprites.front_default;
        this.isOk = true;
      }
      catch(error){
        this.errorMessage = error;
        this.isOk = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
p{
  color:white;
}
span{
  font-style:italic;
}
input{
  width:500px;
  text-transform: lowercase;
  outline: none;
  appearance: none;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );
  border: 3px solid white;
  color: white;
  font-size:2rem;
}
input::placeholder{
  color:white;
  opacity:1;
}
.info{
  background-color:black;
  opacity: 0.8;
  padding:20px;
  width:500px;
}
</style>