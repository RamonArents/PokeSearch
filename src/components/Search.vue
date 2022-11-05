<template>
  <div class="md-5 position-absolute mt-25">
    <!--TODO: Door de data heen loopen en de style netter maken-->
    <p style="color:white">{{ pokemon }}</p>
    <input v-model="pokemon" @keyup.enter="getPokemon()" type="search" placeholder="Search for Pokemon" />
  </div>
</template>

<script>
import { PokeService } from '@/Services/PokeService';

export default {
  name: "Search",
  data: function(){
    return {
      pokemon: this.pokemon,
      errorMessage: null
    };
  },
  methods:{
    async getPokemon(){
      try{
        let response = await PokeService.getPokemon(this.pokemon);
        this.pokemon = response.data;
      }
      catch(error){
        this.errorMessage = error;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.mt-25{
  margin-top:25rem;
}
</style>