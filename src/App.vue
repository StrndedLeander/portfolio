<template>
  <div id="app">
    <Header></Header>
    <Portfolio></Portfolio>
    <Bottom class="bottom"></Bottom>
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
export default {
  name: "app",
  components: {
    Portfolio,
    Header,
    Bottom
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: #c7d3d3;
  color: #1a1a1a;
  height: 100vh;
}
.bottom{
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>
