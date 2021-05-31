<template>
  <base-dialog :show="!!error" title="Error occurred" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <couch-filter @change-filter="setFilters"></couch-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="refresh">Refresh</base-button>
        <base-button
          v-if="isLoggedIn && !isCouch && !isLoading"
          link
          to="/register"
          >Register as Couch</base-button
        >
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
          >Login to register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCouches">
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
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  created() {
    this.loadCouches();
  },
  methods: {
    handleError() {
      this.error = null;
    },
    refresh() {
      this.$store.dispatch('couches/refresh');
      this.loadCouches();
    },
    async loadCouches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('couches/loadCouches');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuth'];
    },
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
    isCouch() {
      return this.$store.getters['couches/isCouch'];
    },
    hasCouches() {
      return !this.isLoading && this.$store.getters['couches/hasCouches'];
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
