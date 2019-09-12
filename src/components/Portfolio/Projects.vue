<template>
  <div class="projects container is-marginless">
      <p class="caption is-size-4-touch is-size-3-desktop has-text-left">PROJECTS</p>
      <!-- <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
      </div>-->
      <p class="is-size-5-touch is-size-5-desktop has-text-justified-touch has-text-left-desktop">
        For more information check out my
        <a href="https://github.com/StrndedLeander">GitHub</a>.
      </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .container {
    max-width: 60vw;
  }
  .caption {
    margin-top: 2%;
    margin-bottom: 5%;
  }
}

@media screen and (max-width: 768px) {
  .container > p {
    max-width: 95vw;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .caption {
    margin-bottom: 5%;
  }
}
</style>