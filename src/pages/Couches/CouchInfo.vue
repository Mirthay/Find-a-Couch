<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact Couch</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCouch: null
    };
  },
  created() {
    this.selectedCouch = this.$store.getters['couches/couches'].find(
      couch => couch.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCouch.firstName + ' ' + this.selectedCouch.lastName;
    },
    rate() {
      return this.selectedCouch.hourlyRate;
    },
    description() {
      return this.selectedCouch.description;
    },
    areas() {
      return this.selectedCouch.areas;
    },

    contactLink() {
      return this.$route.path + '/contact'; // more
    }
  }
};
</script>
