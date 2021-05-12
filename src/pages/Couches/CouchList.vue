<template>
  <section>
    <base-card>
      FILTER
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="contorls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Couch</base-button>
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
    </base-card>
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
