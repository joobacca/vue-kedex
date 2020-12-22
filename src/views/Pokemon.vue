<template>
  <div v-if="loading" class="loading">
    loading lol
  </div>
  <div class="pokemon" v-if="!loading && !error && pokemon">{{ pokemon.name }}
    <img :src="pokemon.sprites.other['official-artwork'].front_default" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import constants from '@/constants';

const { POKE_API } = constants;

// Intended on not using Composition API
// just to get the hang of how the 'old' way
// of writing Vue might be like
export default {
  name: 'Pokemon',
  data() {
    return { pokemon: null, loading: true, error: false };
  },
  created() {
    this.fetchPokemon();
  },
  methods: {
    fetchPokemon() {
      const route = useRoute();

      fetch(`${POKE_API}${route.path.substring(1)}`)
        .then((response) => response.json())
        .then((data) => {
          this.pokemon = data;
        })
        .catch((err) => {
          this.error = err;
        });

      // console.log(route.path);
    },
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
</style>
