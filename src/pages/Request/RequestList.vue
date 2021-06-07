<template>
  <div>
    <base-dialog :show="!!error" title="Error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Request recived</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="noRequests">
          <request-item
            v-for="req in requests"
            :key="req.id"
            :message="req.userMessage"
            :email="req.userEmail"
          >
          </request-item>
        </ul>
        <h3 v-else>You haven't recivet any request yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: { RequestItem },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  created() {
    this.loadRequests();
  },

  methods: {
    handleError() {
      this.error = null;
    },
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    }
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    noRequests() {
      return this.$store.getters['requests/noRequests'];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
