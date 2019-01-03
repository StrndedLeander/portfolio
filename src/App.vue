<template>
  <div id="app">
    <Header></Header>
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Portfolio,
    Header
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
