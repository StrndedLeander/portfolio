<template>
  <div class="personal container is-marginless">
    <p class="caption is-size-4-touch is-size-3-desktop has-text-left">PERSONAL INSIGHTS</p>
    <p
      class="is-size-6-touch is-size-5-desktop has-text-justified-touch has-text-justified-desktop"
    >
      In summer semester 2017 I was able to get my first experience with university.
      I participated in the project "Studieren vor dem Abitur" by the Heinrich-Heine University in Düsseldorf.
      There I took a physics class with the topic of theoretical mechanics. I attended the lectures and exercises and did
      my best following along despite the high prerequisites in mathematics and physics.
    </p>
    <p class="is-size-6-touch is-size-5-desktop has-text-justified-touch has-text-justified-desktop">
      <br>
      Further I had the opportunity to take part of the internship "Projekt Quantenmechanik" at the Technical University of Dortmund.
      There I executed and documented experiences with lasers, gases and electricity with the goal to understand quantum physics.
    </p>
    <p class="is-size-6-touch is-size-5-desktop has-text-justified-touch has-text-justified-desktop">
      <br>
      As I am interested in how education transforms and what impact education has on our society,
      I have been engaged my own in helping students with their educational careers.
      I did volunteer work at my school, as part of an internship and in my freetime as a private tutor.
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
