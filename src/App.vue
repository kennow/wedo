<template>
  <div id="app">
    <my-index></my-index>
    <router-view class='view'></router-view>
  </div>
</template>

<script>
  import Index from '@/components/index'
  export
  default {
    name: 'app',
    components: {
      'my-index': Index
    }
  }
</script>

<style scoped>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  .view {
    position: absolute;
    top: 10.6vh;
    left: 0;
  }
</style>
