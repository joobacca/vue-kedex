import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PokemonView from '@/views/PokemonView.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon/:pokemonId',
    name: 'PokemonView',
    component: PokemonView,
    props: (route) => {
      const id = route.params.pokemonId;
      const pokemonId = Number.parseInt(Array.isArray(id) ? id[0] : id, 10);
      if (Number.isNaN(pokemonId)) {
        return 0;
      }
      return { pokemonId };
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
