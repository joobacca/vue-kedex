<template>
  <div class="home">
    <img src="../assets/logo.svg" />
    <Suspense>
      <template #default>
        <Pokedex />
      </template>
      <template #fallback>
        <div>Loading awesome pokemon ...</div>
      </template>
    </Suspense>
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
