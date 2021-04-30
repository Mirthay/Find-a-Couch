<template>
  <header>
    <nav>
      <h2>
        <router-link to="/">{{ title }}</router-link>
      </h2>
      <ul>
        <li><router-link to="/couches">All Couches</router-link></li>
        <li><router-link to="/request">Request</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style scoped>
header {
  border: 1px solid;
  border-radius: 25px;
  opacity: 0.5;
  box-shadow: 1px 1px black;
}
h2 {
  text-align: center;
}
</style>
