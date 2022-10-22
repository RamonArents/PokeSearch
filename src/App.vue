<template>
  <Pokeball />
  <Search />
</template>

<script>
import Pokeball from './components/Pokeball.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    Pokeball,
    Search
}
}
</script>

<style>
body{
  background:linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('../src/assets/background.png');
  background-size:cover;
  overflow: hidden;
}
#app {
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
