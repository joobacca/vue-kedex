<template>
  <div class="hello">
    <h1>{{ state.title }}</h1>
    <div v-if="state.data.length > 0" class="vuekedex-grid">
      <router-link
        v-for="pokemon in state.data"
        :key="pokemon.name"
        :to="{ name: 'Pokemon', params: { pokemonName: pokemon.name } }"
        >{{ pokemon.name }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, onMounted } from 'vue';
import constants from '@/constants.ts';

const { POKE_API } = constants;

export default defineComponent({
  name: 'Pokedex',
  setup() {
    const state = reactive({
      title: 'Vue-kedex',
      offset: 0,
      data: [],
      nextUrl: '',
      prevUrl: '',
    });

    const fetchPokemon = (url = `${POKE_API}pokemon/`, limit = 20, offset = 0) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.data = data.results;
        });
    };

    onMounted(() => {
      fetchPokemon();
    });

    return { state };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
