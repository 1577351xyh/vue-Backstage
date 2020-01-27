<template>
  <div>
    <div class="header">我是头部</div>
    <div class="app-wrapper">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
        <section class="app-main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </section>
      </div>
    </div>
    <div>我是尾部</div>
  </div>
</template>
<script>
import AppMain from '@/views/layout/components/AppMain' //页面布局的右侧区域
import sidebar from '@/views/layout/components/sidebar' //页面布局的左侧菜单

export default {
  name: 'layout',
  components: {
    sidebar,
    // AppMain
  }
}
</script>

<style scoped>
.app-wrapper {
  /* position: relative; */
  display: flex;
  justify-content: space-between;
}
.sidebar-container {
  width: 25%;
}
.main-container {
  width: 75%;
}
.header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
}
</style>
