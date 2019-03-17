<template>
  <div class="portfolio hero">
    <About class="spModule"></About>
    <Personal class="spModule"></Personal>
    <!-- <Cases></Cases>
    <Contact></Contact>-->
  </div>
</template>

<script>
import axios from "axios";
import config from "../emailService/config";
import About from "./Portfolio/About";
import Personal from "./Portfolio/Personal";
import Contact from "./Portfolio/Contact";
import Cases from "./Portfolio/Cases";

export default {
  name: "Portfolio",
  components: {
    About,
    Personal,
    Contact,
    Cases
  }
};
</script>

<style scoped>
.hero {
  width: 90%;
  height: 90%;
}
</style>
