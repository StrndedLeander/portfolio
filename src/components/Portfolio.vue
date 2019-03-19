<template>
  <div class="portfolio hero">
    <div class="desktop">
      <About></About>
      <Personal class="module"></Personal>
      <Projects class="module"></Projects>
    </div>
    <div class="touch">
      <AboutMobile></AboutMobile>
      <PersonalMobile class="module"></PersonalMobile>
      <ProjectsMobile class="module"></ProjectsMobile>
    </div>
  </div>
</template>

<script>
import About from "./Portfolio/About";
import Personal from "./Portfolio/Personal";
import Projects from "./Portfolio/Projects";
import AboutMobile from "./Portfolio/mobile/AboutMobile";
import PersonalMobile from "./Portfolio/mobile/PersonalMobile";
import ProjectsMobile from "./Portfolio/mobile/ProjectsMobile";

export default {
  name: "Portfolio",
  components: {
    Projects,
    About,
    Personal,
    ProjectsMobile,
    PersonalMobile,
    AboutMobile
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
