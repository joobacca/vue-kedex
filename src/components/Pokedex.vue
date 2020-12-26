<template>
  <div>
    <h1>{{ state.title }}</h1>
    <div v-if="state.data.length > 0" class="p-grid">
      <div
        class="p-col-6 p-md-4 p-lg-3 p-xl-2"
        v-for="(pokemon, index) in state.data"
        :key="pokemon.name"
      >
        <router-link
          :to="{ name: 'PokemonView', params: { pokemonId: index + 1 } }"
          class=""
          >{{ capitalize(pokemon.name) }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, onMounted } from 'vue';
import constants from '@/constants';

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

    const capitalize = ([first, ...rest]: Array<string>) =>
      first.toUpperCase() + rest.join('');

    const fetchPokemon = (
      url = `${POKE_API}pokemon/`,
      limit = 20,
      offset = 0,
    ) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          state.data = data.results;
        });
    };

    onMounted(() => {
      fetchPokemon();
    });

    return { state, capitalize };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
