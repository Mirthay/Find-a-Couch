<template>
  <the-header title="Find A Couch"> </the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
