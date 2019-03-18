<template>
  <div>
    <div class="columns">
      <div class="column is-one-third aboutPicture">
        <figure class="image is-600x600">
          <img src="../../assets/Portfolio-Pic.png">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <div class="aboutContent">
          <div class="container middle">
            <div class="about">
              <p class="caption aboutTitle">About</p>
              <p
                class="aboutText"
              >My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.
                <br>This website is inteded to showcase my web development skills and sell my services.
                <br>
                <br>I've been programming since I was 14 years old and been doing web development for 2 1/2 years.
                <br>My specialties are Single-Page-Applications i.e. Web Applications which are responsive to the user/customer behavior.
                <br>
                <br>Web Applications that fit my skills best are websites for restaturants, delivery services,
                <br>generally all retailers and websites for internal shop administration.
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

.about {
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 62vw;
  /*whatever width you want*/
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
}
</style>