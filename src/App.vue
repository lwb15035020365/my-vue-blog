<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Layout from './views/layouts/IndexView.vue'
</script>

<template>
  <Layout>
    <header class="blog-header">
      <div class="box">
        <div class="title">
          <RouterLink to="/">个人博客 | 技术博客</RouterLink>
        </div>
        <ul class="nav-list">
          <li>
            <RouterLink to="/">首页</RouterLink>
          </li>
          <li>
            <RouterLink to="/map">地图</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于</RouterLink>
          </li>
          <li>
            <RouterLink to="/comments">留言</RouterLink>
          </li>
        </ul>
      </div>
    </header>
    <RouterView />
  </Layout>
</template>

<style scoped lang="less">
a {
  color: #ccc;
}

.blog-header {
  height: 50px;
  background-color: #080808;

  .box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .title {
    color: #ccc;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    margin-right: 20px;
    cursor: pointer;

    &:hover a {
      color: #fff;
    }
  }

  .nav-list {
    display: flex;
    color: #ccc;
    font-size: 15px;

    li {
      margin-right: 10px;
      padding: 0 6px;
      height: 48px;
      line-height: 48px;
      cursor: pointer;

      &:hover a {
        background-color: #000000;
        color: #fff;
      }
    }
  }
}
</style>
