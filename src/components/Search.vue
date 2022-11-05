<template>
  <div class="md-5 position-absolute mt-25">
    <div v-if="isOk">
      <p :name="pokemons" v-for="pokemon in pokemons">{{ pokemon.name }}</p>
    </div>
    <div v-else>
      <p :name="pokemons">Sorry, this pokemon doesn't seem to exist.</p>
    </div>
    <input v-model="pokemons" @keyup.enter="getPokemon()" type="search" placeholder="Search for Pokemon" />
  </div>
</template>

<script>
import { PokeService } from '@/Services/PokeService';

export default {
  name: "Search",
  data: function(){
    return {
      pokemons: this.pokemons,
      errorMessage: null,
      isOk: true
    };
  },
  methods:{
    async getPokemon(){
      try{
        let response = await PokeService.getPokemon(this.pokemons);
        this.pokemons = response.data;
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
.mt-25{
  margin-top:25rem;
}
</style>