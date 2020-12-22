<template>
  <div class="home">
    <img alt="Vue-kedex logo" src="http://via.placeholder.com/400x400" />
    <Pokedex msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pokedex from '@/components/Pokedex.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Pokedex,
  },
});
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}
</style>
