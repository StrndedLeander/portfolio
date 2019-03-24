<template>
  <div class="about is-block-desktop-only is-inline-touch">
    <div class="columns">
      <div class="column is-one-third container">
        <figure class="image is-600x600">
          <img src="../../assets/Portfolio-Pic.png">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <div class="aboutContent">
          <div class="middle">
            <div class="aboutText">
              <p class="caption is-size-4-touch is-size-4-desktop">About</p>
              <p
                class="is-size-5-touch is-size-5-desktop has-text-justified-touch has-text-left-desktop"
              >
                My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.
                This website is inteded to become a platform that centralizes the products I build.
                <br>I've been programming since I am 14 years old and I have been doing web development for two and a half years.
                <br>Right now I am building mostly single-page webapplications.
                The technologies I use for that are VueJs as my client-side and NodeJs as my server-sided backend code.
                <br>I want to build products that combine: Supporting peoples individuality and better social cohabit on all levels.
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
  width: 85vw;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}
@media only screen and (min-width: 960px) {
  .caption {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
    width: 60vw;
  }

  .middle {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>