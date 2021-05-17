<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email" id="email">Your E-Mail</label>
      <input v-model.trim="email" type="email" name="email" id="email" />
    </div>
    <div class="form-control">
      <label for="message">Leave your message</label>
      <textarea
        v-model.trim="message"
        name="message"
        id="message"
        rows="5"
      ></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter email and some message
    </p>
    <div class="actions">
      <base-button>Send message </base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCouch', {
        couchId: this.$route.params.id,
        email: this.email,
        message: this.message
      });
      this.$router.replace('/couches');
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
