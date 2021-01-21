<template>
  <div>
    <h1>Vue-kedex</h1>
    <div
      v-if="allPokemon && allPokemon.length > 0"
      class="p-grid"
    >
      <Card
        v-for="(pokemon) in allPokemon"
        :key="pokemon.name"
        class="p-col-6 p-md-4 p-lg-3 p-xl-2"
      >
        <template #content>
          <router-link
            :to="{
              name: 'PokemonView',
              params: { pokemonId: pokemon.id },
            }"
            class="pokemon-link"
          >
            {{ capitalize(pokemon.name) }}
          </router-link>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { capitalize } from '@/utils/helperFunctions';

export default defineComponent({
  name: 'Pokedex',
  setup() {
    const store = useStore();

    store.dispatch('loadInitialPokemon');

    const offset = 0;
    return {
      capitalize,
      // allPokemon,
      offset,
      allPokemon: store.state.pokemon,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pokemon-link {
  text-decoration: none;
}
</style>
