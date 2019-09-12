<template>
  <div>
    <Header></Header>
    <Portfolio></Portfolio>
    <Bottom class="bottom"></Bottom>
  </div>
</template>

<script>
import Portfolio from "../components/Portfolio";
import Header from "../components/Header";
import Bottom from "../components/Bottom";
export default {
  name: "home",
  components: {
    Portfolio,
    Header,
    Bottom
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>