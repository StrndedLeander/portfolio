<template>
  <div class="projects is-block-desktop-online is-inline-touch">
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="container">
        <div class="column is-two-thirds">
          <div class="projectsContent">
            <p class="caption is-size-4-touch is-size-4-desktop">Projects</p>
            <!-- <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            </div>-->
            <p
              class="is-size-5-touch is-size-5-desktop has-text-justified-touch has-text-left-desktop"
            >
              For more information check out my
              <a href="https://github.com/StrndedLeander">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.caption {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 17px 0 17px 0;
}
.projectsContent {
  margin-left: auto;
  margin-right: auto;
  width: 85vw;
}
@media only screen and (min-width: 960px) {
  .caption {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 17px 0 17px 0;
  }
  .projectsContent {
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
  }
}
</style>