<template>
  <div>
    <h1>Vue-kedex</h1>
    <div v-if="allPokemon && allPokemon.length > 0" class="p-grid">
      <Card
        class="p-col-6 p-md-4 p-lg-3 p-xl-2"
        v-for="(pokemon, index) in allPokemon"
        :key="pokemon.name"
      >
        <template #content>
          <router-link
            :to="{ name: 'PokemonView', params: { pokemonId: index + 1 + offset } }"
            class="pokemon-link"
            >{{ capitalize(pokemon.name) }}</router-link
          >
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { capitalize } from '@/utils/helperFunctions';
import useAllPokemon from '@/use/useAllPokemon';

export default defineComponent({
  name: 'Pokedex',
  setup() {
    const { allPokemon, error } = useAllPokemon();
    const offset = 0;
    return { capitalize, allPokemon, error, offset };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pokemon-link {
  text-decoration: none;
}
</style>
