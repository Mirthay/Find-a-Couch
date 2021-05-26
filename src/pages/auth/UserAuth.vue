<template>
  <form @submit.prevent="submitForm">
    <base-card>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <p class="errors" v-if="!formIsValid">
        Please enter a valid email and password.<br />Password must be at least
        6 characters long.
      </p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="swichAuthMode">{{
        switchModeButtonCaption
      }}</base-button>
    </base-card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      }
      return 'Signup';
    },
    switchModeButtonCaption() {
      if (this.mode === 'signup') {
        return 'Login instead';
      }
      return 'Signup instead';
    }
  },

  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      if (this.mode === 'login') {
        //
      } else {
        this.$store.dispatch('auth/signup', {
          email: this.email,
          password: this.password
        });
      }
    },
    swichAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else this.mode = 'login';
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
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
