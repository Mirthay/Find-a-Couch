<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="contorls">
      <button>Refresh</button>
      <router-link to="/register">Register as Couch</router-link>
    </div>
    <ul>
      List Of Couches
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  border: 1px solid;
  border-radius: 25px;
  opacity: 0.5;
  box-shadow: 1px 1px black;
}
h2 {
  text-align: center;
}
</style>
