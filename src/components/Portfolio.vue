<template>
  <div class="portfolio hero">
    <About></About>
    <Personal></Personal>
    <Projects></Projects>
    <!-- <Cases></Cases>
    <Contact></Contact>-->
  </div>
</template>

<script>
import About from "./Portfolio/About";
import Personal from "./Portfolio/Personal";
import Projects from "./Portfolio/Projects";
// import Contact from "./Portfolio/Contact";
// import Cases from "./Portfolio/Cases";

export default {
  name: "Portfolio",
  components: {
    Projects,
    About,
    Personal
    // Contact,
    // Cases
  }
};
</script>

<style scoped>
.hero {
  width: 90%;
  height: 90%;
}
</style>
