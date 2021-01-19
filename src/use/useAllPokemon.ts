import { reactive, toRefs } from 'vue';
import constants from '@/constants';

const { POKE_API } = constants;

function useAllPokemon() {
  const state = reactive({
    allPokemon: null,
    next: null,
    previous: null,
    error: null,
  });
  fetch(`${POKE_API}pokemon/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      state.allPokemon = data.results;
    })
    .catch((err) => {
      state.error = err;
    });
  return toRefs(state);
}

export default useAllPokemon;
