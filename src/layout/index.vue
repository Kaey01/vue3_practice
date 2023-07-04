<template>
  <div class="layout_container">
    <!-- 左侧菜单-->
    <div class="layout_slider"></div>
    <!-- 顶部导航-->
    <div class="layout_tabbar"></div>
    <!-- 内容展示-->
    <div class="layout_main">
      <div style="height: 1000px"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout',
}
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: aqua;
    top: 0;
    left: $base-menu-width;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: blueviolet;
    left: $base-menu-width;
    top: $base-tabbar-height;
    overflow: auto;
  }
}
</style>
