import { createStore } from 'vuex';
import axios from 'axios';
import constants from '@/constants';

const { POKE_API } = constants;

const api = axios.create({
  baseURL: POKE_API,
});

export default createStore({
  state: {
    pokemon: [],
  },
  getters: {
    getOrderedPokemon: (state) => [...state.pokemon.sort((a, b) => a.id - b.id)],
    getSinglePokemon: (state) => (id) => state.pokemon.find((pid) => pid === id),
  },
  mutations: {
    loadPokemon(state, pkmn) {
      state.pokemon.push(pkmn);
    },
  },
  actions: {
    loadInitialPokemon(context) {
      api
        .get('pokemon/')
        .then((res) => {
          res.data.results.forEach(({ name }) => {
            api.get(`pokemon/${name}/`).then((re) => {
              context.commit('loadPokemon', re.data);
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
