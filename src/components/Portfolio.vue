<template>
  <div class="portfolio hero">
    <About></About>
    <Personal class="module"></Personal>
    <Projects class="module"></Projects>
  </div>
</template>

<script>
import About from "./Portfolio/About";
import Personal from "./Portfolio/Personal";
import Projects from "./Portfolio/Projects";

export default {
  name: "Portfolio",
  components: {
    Projects,
    About,
    Personal
  }
};
</script>

<style scoped>
.hero {
  width: 90%;
  height: 90%;
}
.module {
  margin: 10px 0 10px 0;
}
</style>
