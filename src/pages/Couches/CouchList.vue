<template>
  <section>
    <couch-filter @change-filter="setFilters"></couch-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
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
import CouchFilter from '../../components/couches/CouchFilter.vue';
export default {
  components: { CouchItem, CouchFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filteredCouches() {
      const couches = this.$store.getters['couches/couches'];
      return couches.filter(couch => {
        if (this.activeFilters.frontend && couch.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && couch.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && couch.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCouches() {
      return this.$store.getters['couches/hasCouches'];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
