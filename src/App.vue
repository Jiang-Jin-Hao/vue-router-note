<template>
  <div id="app">

    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div>
      <h1>App组件</h1>
      <router-link to="/discover">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friends">关注</router-link>
      <!--  声明路由占位符  -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

    // HelloWorld

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
