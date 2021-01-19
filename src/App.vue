<template>
  <Menubar id="nav" :model="items">
    <template #start>
      <div><img :src="'./assets/logo.svg'" /></div>
    </template>
    <template #end><Socials /></template>
  </Menubar>
  <div id="wrapper">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Socials from '@/components/Socials.vue';
import logo from '@/assets/logo.svg';

export default defineComponent({
  name: 'App',
  components: {
    Socials,
  },
  setup() {
    return {
      logo,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-file',
          to: '/',
        },
        {
          label: 'About',
          icon: 'asdf',
          to: '/about',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#wrapper {
  padding: 0 5% 50px 5%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
