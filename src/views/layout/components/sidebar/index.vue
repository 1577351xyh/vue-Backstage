<template>
  <el-menu
    mode="vertical"
    unique-opened
    :default-active="$route.path"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import sidebarItem from './sidebarItem'

export default {
  components: { sidebarItem },
  computed: {
    routes() {
      console.log(this.$store.state.router)
      return this.$store.state.router
    }
  }
}
</script>
<style>
/* .el-menu{
  width: 30%;
} */
</style>
