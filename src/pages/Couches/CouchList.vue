<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="contorls">
      <button>Refresh</button>
      <router-link to="/register">Register as Couch</router-link>
    </div>
    <ul v-if="hasCouches">
      <li v-for="couch in filteredCouches" :key="couch.id">
        {{ couch.firstName }} {{ couch.lastName }}
      </li>
    </ul>
    <h3 v-else>No couches found.</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCouches() {
      return this.$store.getters['couches/couches'];
    },
    hasCouches() {
      return this.$store.getters['couches/hasCouches'];
    }
  }
};
</script>

<style scoped>
section {
  border: 1px solid;
  border-radius: 25px;
  opacity: 0.5;
  box-shadow: 1px 1px black;
}
h2 {
  text-align: center;
}
</style>
