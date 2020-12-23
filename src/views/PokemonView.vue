<template>
  <!-- <div v-if="loading" class="loading">loading lol</div> -->
  <div class="pokemon" v-if="!error && pokemon">
    {{ pokemon.name }}
    <img :src="pokemon.sprites.other['official-artwork'].front_default" class="main-sprite" />
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import usePokemon from '@/use/usePokemon.ts';

export default {
  name: 'Pokemon',
  setup() {
    const route = useRoute();
    const { pokemonId } = route.params;

    return {
      ...usePokemon(
        parseInt(Array.isArray(pokemonId) ? pokemonId[0] : pokemonId, 10),
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: deepskyblue;
  color: white;
  height: 100%;
}
.main-sprite {
  max-width: 100%;
}
</style>
