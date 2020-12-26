<template>
  <div class="home">
    <img src="http://via.placeholder.com/400x400" />
    <Suspend>
      <template #default>
        <Pokedex />
      </template>
      <template #fallback>
        <div>Loading awesome pokemon ...</div>
      </template>
    </Suspend>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pokedex from '@/components/Pokedex.vue'; // @ is an alias to /src

type ErrorCapturedHook = (err: Error, info: string) => boolean | void;

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
