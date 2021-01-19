<template>
  <Suspense>
    <template #default>
      <PokemonDetails :pokemonId="pokemonId" />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import PokemonDetails from '@/components/PokemonDetails.vue';

export default defineComponent({
  name: 'Pokemon',
  components: {
    PokemonDetails,
  },
  setup() {
    const route = useRoute();
    const { pokemonId } = route.params;
    const id = Array.isArray(pokemonId) ? pokemonId[0] : pokemonId;

    return {
      pokemonId: id,
    };
  },
});
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
