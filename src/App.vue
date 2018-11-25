<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated" v-bind:is-auth="isAuth"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      isAuth: false
    }
  },

  methods: {
    setAuthenticated ( isAuth ) {
      this.isAuth = isAuth;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
