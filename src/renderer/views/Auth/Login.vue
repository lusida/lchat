<template>
  <el-row>
    <el-button @click="onLogin">默认按钮</el-button>
    <div>{{User.UserId}}</div>
    <div>{{User.UserName}}</div>
    <div>{{User.DispalyName}}</div>
    <div>{{User.Email}}</div>
    <div>{{User.IsAuthenticated}}</div>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      User: this.$store.state.User
    }
  },
  created () {

  },
  methods: {
    onLogin () {
      this.$electron.remote.app.isLogined = true
      this.$electron.remote.app.User = {
        UserId: '001',
        UserName: 'lusida',
        DispalyName: 'LSD',
        Email: 'lsd@appeon.com',
        CompanyId: 'C001'
      }
      this.$store.dispatch('onLogined', this.$electron.remote.app.User)

      this.$router.push({name: 'Chat'})

      this.$electron.ipcRenderer.send('changWindowSize')
    }
  }
}
</script>

<style>
</style>