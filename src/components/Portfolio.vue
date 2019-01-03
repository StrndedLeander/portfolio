<template>
<div class="portfolio hero">
  <div class="columns">
    <div class="column is-one-third">
      <figure class="image is-600x600">
        <img src="../assets/Portfolio-Pic.png">
        </figure>
    </div>
    <div class="column is-two-thirds">
      <div class="container">
        <div class="about">
          <p class="aboutTitle">About</p>
          <p class="aboutText">My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.
            <br>This website is inteded to showcase my web development skills and sell my services.
            <br>
            <br>I've been programming since I was 14 years old and been doing web development for 2 1/2 years.
            <br>My specialties are Single-Page-Applications i.e. Web Applications which are responsive to the user/customer behavior.
            <br>
            <br>Web Applications that fit my skills best are websites for restaturants, delivery services,
            <br>generally all retailers and websites for internal shop administration.
            </p>
        </div>
        <div class="projects">
          <p class="projectsTitle">Projects</p>
          <div class="projectsContainer">
            <div class="columns">
              <div class="column">
                <div class="projectImage"></div>
              </div>
              <div class="column">
                <div class="projectDesc"></div>
              </div>
            </div>
            <div class="icons">
              <span class="icon" style="margin-left:1160px;">
                <i class="fas fa-arrow-up"></i>
              </span>
              <span class="icon" style="margin-left:1160px;">
                <i class="fas fa-arrow-down"></i>
              </span>
            </div>
          </div>
          <div class="cases">
            <p class="casesTitle">Cases</p>
            <div class="casesOptions columns">
              <div class="column">
                <div class="container">

                </div>
              </div>
              <div class="column">
                <div class="container">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped>
.hero{
  width: 90%;
  height: 90%;
}
.about {
  border-bottom: 1px #707070 solid;
}

.aboutTitle {
  font-size: 110%;
  margin: 17px 0 17px 50px;
}

.aboutText {
  font-size: 90%;
  margin-bottom: 17px;
  margin-left: 50px;
}

.projects {
  border-bottom: 1px #707070 solid;
}

.projectsTitle {
  color: #707070;
  font-size: 110%;
  margin: 17px 0 17px 50px;
}

.projectsContainer {
  width: 1193px;
  height: 330px;
  border: 1px #707070 solid;
  margin-left: 50px;
  margin-bottom: 12px;
}

.projectsContainer .columns .column {
  margin-top: 35px;
}

.column .projectImage {
  margin-left: 25px;
  width: 255px;
  height: 255px;
  border: 1px #707070 solid;
}

.column .projectDesc {
  margin-right: 71px;
  width: 850px;
  height: 255px;
  border: 1px #707070 solid;
}
.casesTitle {
  color: #707070;
  font-size: 110%;
  margin: 17px 0 17px 50px;
}
.casesOptions .column .container {
  margin-left: 50px;
  margin-bottom: 20px;
  width: 536px;
  height: 255px;
  border: 1px #707070 solid;
}
</style>
