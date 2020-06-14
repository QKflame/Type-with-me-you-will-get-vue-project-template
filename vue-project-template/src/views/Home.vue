<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    /** 调用接口获取 Mock 的数据 */
    this.$api.user.getUserInfo().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
