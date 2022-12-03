<template>
  <div class="md-5 position-absolute mt-25">
    <div :class="{info: isOk}" v-if="isOk">
      <p>Name: {{ name }}</p>
      <p>Type: {{ type }}</p>
      <p>Moves:</p>
      <!--TODO: Juiste data hieruit ophalen-->
      <p v-for="move in moves">{{ move }}</p>
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
      moves: null,
      errorMessage: null,
      isOk: false,
    };
  },
  methods:{
    async getPokemon(){
      try{
        let response = await PokeService.getPokemon(this.pokemon);
        console.log(response.data.moves);
        this.name = response.data.name;
        this.type = response.data.types[0].type.name;
        this.moves = response.data.moves;
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
.mt-25{
  margin-top:25rem;
}
.info{
  background-color:black;
  opacity: 0.8;
  padding:20px;
}
</style>