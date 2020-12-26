<template>
  <div class="pokemon" v-if="!error && pokemon">
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      class="main-sprite"
    />
    {{ pokemon.name }}
    
  </div>
</template>

<script>
import usePokemon from '@/use/usePokemon';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonDetails',
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { pokemon, error } = usePokemon(props.pokemonId);
    return {
      pokemon,
      error
    };
  }
});
</script>

<style scoped lang="scss">
.main-sprite {
  display: block;
  margin: auto;
}
</style>
