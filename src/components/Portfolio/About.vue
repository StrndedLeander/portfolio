<template>
  <div class="about is-block-desktop-only is-inline-touch">
    <div class="columns">
      <div class="column is-one-third aboutPicture">
        <figure class="image is-600x600">
          <img src="../../assets/Portfolio-Pic.png">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <div class="aboutContent">
          <div class="container middle">
            <div class="aboutText">
              <p class="caption aboutTitle">About</p>
              <p
                class="aboutText"
              >My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.
                <br>This website is inteded to become a platform that centralizes the products I build.
                <br>
                <br>I've been programming since I am 14 years old and I have been doing web development for two and a half years.
                <br>Right now I am building mostly single-page applications with VueJs and write my backend in NodeJs.
                <br>
                <br>I want to build products that combine supporting individuality and better social cohabit on all levels.
              </p>
            </div>
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
  font-size: 110%;
  margin: 17px 0 17px 0;
}

.aboutContent {
  display: table;
  height: 100%;
  width: 100%;
}

.aboutText {
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
}
</style>