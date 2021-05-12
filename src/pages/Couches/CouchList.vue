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
      <couch-item
        v-for="couch in filteredCouches"
        :key="couch.id"
        :id="couch.id"
        :firstName="couch.firstName"
        :lastName="couch.lastName"
        :areas="couch.areas"
        :rate="couch.hourlyRate"
      ></couch-item>
    </ul>
    <h3 v-else>No couches found.</h3>
  </section>
</template>

<script>
import CouchItem from '../../components/couches/CouchItem.vue';
export default {
  components: { CouchItem },
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
  box-shadow: 1px 1px black;
}
h2 {
  text-align: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
