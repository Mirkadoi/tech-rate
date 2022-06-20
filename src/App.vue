<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p>
    <router-link to="/">Home</router-link>
    <router-link to="/blogs">Blogs</router-link>
  </p>
  <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
    @import "./assets/scss/variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-secondary;
  margin-top: 60px;
}
</style>
