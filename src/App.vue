<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  html{
    height: 100vh;
    background-color: #371149;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #371149;
  margin-top: 50px;
  h1,h2,h3{
    color: #80c6cf;
    margin: 15px auto;
    line-height: 1.3;
  }
  p{
    color: #fff;
    margin: auto;
  }
}

</style>
