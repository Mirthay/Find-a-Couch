<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <couch-form @save-data="saveData"></couch-form>
    </base-card>
  </section>
</template>

<script>
import CouchForm from '../../components/couches/CouchForm.vue';
export default {
  components: { CouchForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('couches/registerCouch', data);
      this.$router.replace('/couches');
    }
  }
};
</script>

<style scoped></style>
