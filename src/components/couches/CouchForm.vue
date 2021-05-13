<template>
  <form>
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input v-model.trim="firstName" type="text" id="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input v-model.trim="lastName" type="text" id="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        v-model.trim="description"
        type="text"
        id="description"
        rows="4"
      />
    </div>
    <div class="form-control">
      <label for="rate">Hourly rate</label>
      <input v-model.number="rate" type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Area of Epertise</h3>
      <div>
        <input v-model="areas" type="checkbox" id="frontend" value="frontend" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input v-model="areas" type="checkbox" id="backend" value="backend" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input v-model="areas" type="checkbox" id="career" value="career" />
        <label for="career">Career Advisory </label>
      </div>
    </div>
    <base-button @click.prevent="submitForm"> Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      };
      this.$emit('save-data', formData);
      /*   this.firstName = '';
      this.lastName = '';
      this.description = '';
      this.rate = null;
      this.areas = []; */
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
