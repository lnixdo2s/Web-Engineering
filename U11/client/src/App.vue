<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PostComponent/>

    <h1>Divider </h1>
    <MenuComponent/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    PostComponent, MenuComponent
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
