<template>
  <div class="portfolio hero">
    <div class="columns">
      <div class="column is-one-third container">
        <figure class="image is-paddingless">
          <img src="../assets/Portfolio-Pic.png">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <carousel :perPage="1" :scrolPerPage="false" :paginationSize="12">
          <slide>
            <About></About>
          </slide>
          <slide>
            <Personal></Personal>
          </slide>
          <slide>
            <Projects></Projects>
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
    About,
    Personal,
    Projects,
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.portfolio{
  background-color: #ffcf98;
}
@media screen and (max-width: 768px){
  .is-one-third{
    transform: scale(0.95,0.95);
  }
  .is-two-thirds{
    margin-bottom: 25%;
  }
}
@media screen and (min-width: 769px){
  .is-one-third{
    height: 100%;
    margin-top: 2%;
  }
}
</style>
