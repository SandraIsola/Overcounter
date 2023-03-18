<template>
  <div id="app">
  <nav-link />
  <router-view />
  <!-- <counter-page/>  -->
</div>
</template>

<script>
// import CounterPage from './components/CounterPage.vue'
import NavLink from './components/NavLink.vue';


export default {
  name:'App',
  components: { NavLink,}
};
  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
