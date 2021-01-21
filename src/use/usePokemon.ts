import { reactive, toRefs } from 'vue';
import constants from '@/constants';

const { POKE_API } = constants;

function usePokemon(pokemonId: number) {
  const state = reactive({
    pokemon: null,
    error: null,
  });
  fetch(`${POKE_API}pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => {
      state.pokemon = data;
    })
    .catch((err) => {
      state.error = err;
    });
  return toRefs(state);
}

export default usePokemon;
