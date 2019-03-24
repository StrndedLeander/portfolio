<template>
  <div class="personal is-block-desktop-only is-inline-touch">
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-two-thirds">
        <div class="personalText">
          <p class="caption is-size-4-touch is-size-4-desktop">Insights</p>
          <p
            class="is-size-5-touch is-size-5-desktop has-text-justified-touch has-text-left-desktop"
          >
            In summer semester 2017 I was able to get my first experience with university.
            I participated in the project "Studieren vor dem Abitur" by the Heinrich-Heine University in Düsseldorf.
            There I took a physics class with the topic of theoretical mechanics. I attended the lectures and exercises and did
            my best following along despite the high prerequisites in mathematics and physics.
          </p>
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
.personalText {
  margin-left: auto;
  margin-right: auto;
  width: 85vw;
}
@media only screen and (min-width: 960px) {
  .caption {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 17px 0 17px 0;
  }
  .personalText {
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
  }
}
</style>
