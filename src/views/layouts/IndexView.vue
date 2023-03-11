<template>
  <a-layout class="blog-layout">
    <a-layout-header :style="{ height: '50px' }">
      <div class="title">
        <RouterLink to="/">个人博客 | 技术博客</RouterLink>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '50px' }">
        <a-menu-item key="1">
          <RouterLink to="/">首页</RouterLink>
        </a-menu-item>
        <a-menu-item key="2">
          <RouterLink to="/map">地图</RouterLink>
        </a-menu-item>
        <a-menu-item key="3">
          <RouterLink to="/about">关于</RouterLink>
        </a-menu-item>
        <a-menu-item key="4">
          <RouterLink to="/comments">留言</RouterLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-sider>
        sider
      </a-layout-sider>
    </a-layout>
    <!-- <a-layout-footer>
      footer
    </a-layout-footer> -->
  </a-layout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, type Ref } from 'vue';
let selectedKeys: Ref<string[]> = ref(['1'])
</script>

<style scoped lang="less">
.blog-layout {
  height: 100%;

  .ant-layout-header {
    display: flex;

    .title {
      height: 50px;
      line-height: 50px;
      margin-right: 20px;
      font-size: 18px;

      a {
        color: #ccc;
      }
    }
  }

  .ant-layout-sider {
    color: #ccc;
  }
}
</style>