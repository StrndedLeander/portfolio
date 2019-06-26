<template>
  <div class="portfolio hero">
    <div class="columns">
      <div class="column is-one-third container">
        <figure class="image">
          <img src="../assets/Portfolio-Pic.png">
        </figure>
      </div>
      <div class="column">
        <carousel
          class="carousel"
          :perPage="1"
          :controls="true"
        >
          <slide>
            <About></About>
          </slide>
          <slide>
            <Personal class="module"></Personal>
          </slide>
          <slide>
            <Projects class="module"></Projects>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./Portfolio/About";
import Personal from "./Portfolio/Personal";
import Projects from "./Portfolio/Projects";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Portfolio",
  components: {
    Projects,
    About,
    Personal,
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.module {
  margin: 10px 0 10px 0;
}
</style>
