<script setup lang="ts">
import Layout from './views/layouts/IndexView.vue'
</script>

<template>
  <Layout></Layout>
</template>

<style lang="less">
#app {
  height: 100%;
}

a {
  color: #ccc;
}

.ant-menu-dark.ant-menu-horizontal>.ant-menu-item:hover {
  background: #001529;
  color: #ccc;
}

.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background: #001529;
}
</style>
