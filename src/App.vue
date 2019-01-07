<template>
  <div id="app">
    <Header></Header>
    <Portfolio></Portfolio>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Bottom from './components/Bottom'
export default {
  name: 'app',
  components: {
    Portfolio,
    Header,
    Bottom
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
