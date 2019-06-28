<template>
  <div class="about container is-marginless">
    <p class="caption is-size-4-touch is-size-3-desktop has-text-left">ABOUT - ME & MY VISION</p>
    <p
      class="is-size-6-touch is-size-5-desktop has-text-justified-touch has-text-justified-desktop"
    >
      My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.
      I have been programming for seven years now. I have tried out development in various fields such as games, apps, ai and web. I haven't been able to release any serious projects to the public but this will change in the near future.<br>
      This website is inteded to become a platform that centralizes the products I build.<br><br>
      The Apps, Websites and Products will be built on enhancing each other, through their data, functionalities and interfaces.<br>
      My current project is an online-education platform, which will help schools with digitization and digitilization and improve the way students learn, collaborate and interact.<br><br>
      I am an enterpreneur!<br> I believe that you can call yourself an enterpreneur as soon as you start working for yourself and your dreams. I have got the urge to change our civilisation for the better.
      I want to build products that help solving the big questions of humanity. That is what my generation has to and will do.<br> I want to be part of that!
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