<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Collaborator',
    created () {
      console.log('=>', this.$electron.remote.app.isLogined, this.$electron.remote.app.User)
      if (this.$electron.remote.app.IsLogined && this.$electron.remote.app.User) {
        this.$store.dispatch('onLogined', this.$electron.remote.app.User)
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
