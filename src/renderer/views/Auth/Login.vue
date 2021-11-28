<template>
  <el-row>
    <el-button @click="onLogin">默认按钮</el-button>
  </el-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    onLogin () {
      this.$electron.remote.app.isLogined = true
      this.$store.dispatch('onLogined', {
        UserId: '0001',
        UserName: 'LuSiDa',
        DisplayName: 'LLLL',
        CompanyId: 'Appeon',
        Email: 'sida.lu@appeon.com',
        Token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      })
    }
  }
}
</script>

<style>
</style>