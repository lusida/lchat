<template>
  <el-row>
    <el-button @click="onLogin">默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
</template>

<script>
export default {
  methods: {
    onLogin () {
      this.$store.commit('AUTH_ONLOGINED', {
        UserId: '0001',
        UserName: 'LuSiDa',
        DisplayName: 'LLLL',
        CompanyId: 'Appeon',
        Email: 'sida.lu@appeon.com'
      })
    }
  }
}
</script>

<style>
</style>