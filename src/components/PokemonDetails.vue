<template>
  <div
    v-if="pokemon"
    class="pokemon"
  >
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      class="main-sprite"
    >
    {{ pokemon.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PokemonDetails',
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    return {
      pokemon: computed(() => store.getters.getSinglePokemon(props.pokemonId)),
    };
  },
});
</script>

<style scoped lang="scss">
.main-sprite {
  display: block;
  margin: auto;
}
</style>
