<template>
  <section>
    <base-card
      ><header>
        <h2>Request recived</h2>
      </header>
      <ul v-if="noRequests">
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
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: { RequestItem },
  data() {
    return {};
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
