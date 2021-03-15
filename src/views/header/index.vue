<template>
  <el-page-header content="密码登录" class="header" @back="goBack" />
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    display:flex;
    align-items:center;
    height:60px;
    background:#fff;

  }
</style>
