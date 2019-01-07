<template>
<div class="portfolio hero">
  <div class="columns">
    <div class="column is-one-third">
      <figure class="image is-600x600">
        <img src="../assets/Portfolio-Pic.png">
        </figure>
    </div>
    <div class="column is-two-thirds">
      <div class="container context">
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
              <div class="column"></div>
              <div class="column is-one-fifth">
                <span class="icon upArrow">
                <i class="fas fa-arrow-up"></i>
              </span>
                <span class="icon downArrow">
                <i class="fas fa-arrow-down"></i>
              </span>
              </div>
            </div>
          </div>
          <div class="cases">
            <p class="casesTitle">Cases</p>
            <div class="casesContainer">
              <div class="columns is-mobile">
                <div class="column">
                  <div class="container">
                    <div class="columns">
                      <!-- Start Top Case #1 -->
                      <div class="column">
                        <figure class="image is-80x40">
                          <img class="codeImg" src="../assets/code.png">
                        </figure>
                      </div>
                      <div class="column">
                        <p>Website Creation</p>
                      </div>
                      <div class="column"></div>
                    </div>
                    <!-- End Top Case #1 -->
                    <div>
                      <p class="caseText">Get a website created after your wishes,<br>whether for personal use or for your company.<br><br>For most use cases and with database and<br>server infrastructure if needed.</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="container">
                    <!-- Start Top Case #2 -->
                    <div class="columns">
                      <div class="column">
                        <figure class="image is-80x40">
                          <img class="codeImg" src="../assets/Uhr-Code-maintenance.png">
                        </figure>
                      </div>
                      <div class="column">
                        <p>Website Maintenance</p>
                      </div>
                      <div class="column"></div>
                    </div>
                    <!-- End Top Case #2 -->
                    <div>
                      <p class="caseText">Do your webservices need maintenance or<br>administration?<br><br>Error fixing, site changes, responsivness and<br>backend infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
        <p class="contactTitle">Contact</p>
        <div class="container contactOptions">
          <div class="columns">
            <div class="column">
              <button class="button" @click="openEmail">Send E-Mail</button>
            </div>
            <div class="column">
              <p>or</p>
            </div>
            <div class="column form">
              <div class="field">
                <label class="label">Fill out form</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Your Name">
                      </div>
                  <div class="control">
                    <input class="input" type="text" placeholder="Your E-Mail Adress">
                      </div>
                    <div class="control">
                      <div class="select">
                        <select v-model="websiteUseCase">
                            <option selected>Personal</option>
                            <option>Company</option>
                            <option>Other</option>
                          </select>
                      </div>
                    </div>
                    <div class="control" v-if="websiteUseCase === 'Company'">
                      <input class="input" type="text" placeholder="Your Companies Name" v-model="companyName">
                      </div>
                      <div class="control" v-if="websiteUseCase === 'Other'">
                        <input class="input" type="text" placeholder="Specify Use Case" v-model="otherUseCase">
                      </div>
                        <div class="control">
                          <div class="select">
                            <select v-model="caseOption">
                                <option selected>Website Creation</option>
                                <option>Website Maintenance</option>
                              </select>
                          </div>
                        </div>
                      </div>
                      <div class="control">
                        <label class="label">Description</label>
                      </div>
                      <div class="control">
                        <textarea class="textarea" placeholder="Give a brief description for what your website is intended and the features it should contain." v-model="description"></textarea>
                      </div>
                      <button class="button is-link" type="submit" @click="sendForm">Submit</button>
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
  name: "Portfolio",
  data() {
    return {
      websiteUseCase: 'Personal',
      companyName: '',
      otherUseCase: '',
      name: '',
      email: '',
      description: '',
      caseOption: 'Website Creation'
    }
  },
  methods: {
    openEmail() {
      window.location.href = "mailto:vandiepen.international@gmail.com?subject=Website Creation/Maintenance Request"
    },
    sendForm() {
      
    }
  }
};
</script>

<style scoped>
.hero {
  width: 90%;
  height: 90%;
}

.context {
  width: 1320px;
}

.contactTitle {
  font-size: 110%;
  margin: 17px 0 17px 0;
}

.contact {
  margin: 0 0 0 50px;
  width: 95%;
}

.control {
  margin-bottom: 16px;
  width: 515px;
}

.contactDesc {
  height: 150px;
}

.form {
  margin: 0 153px 0 0;
}

.about {
  margin-left: 50px;
  max-width: 1193px;
  border-bottom: 1px #707070 solid;
}

.aboutTitle {
  font-size: 110%;
  margin: 17px 0 17px 0;
}

.aboutText {
  font-size: 90%;
  margin-bottom: 17px;
}

.projectsTitle {
  color: #707070;
  font-size: 110%;
  margin: 17px 0 17px 50px;
}

.casesContainer {
  max-width: 1193px;
  height: 330px;
  border-bottom: 1px #707070 solid;
  margin-left: 50px;
}

.casesTitle {
  margin-left: 50px;
  font-size: 110%;
  color: #707070;
}

.casesContainer .columns .column .container {
  width: 536px;
  height: 270px;
  border: 1px solid black;
  margin-top: 20px;
}

.codeImg {
  width: 80px;
  height: 40px;
  margin-top: 35px;
  margin-left: 10px;
}

.casesContainer .columns .column .container .columns .column p {
  color: black;
  font-size: 115%;
  font-weight: 500;
  margin: 40px 0 10px 45px;
  width: 185px;
}

.caseText {
  margin-left: 105px;
  font-size: 105%;
}

.projectsContainer {
  max-width: 1193px;
  height: 330px;
  border: 1px #707070 solid;
  margin-left: 50px;
  margin-bottom: 12px;
}

.projectsContainer .columns .column {
  margin-top: 35px;
}

.upArrow {
  margin-left: 190px;
  margin-bottom: 100px;
}

.downArrow {
  margin-left: 190px;
  margin-top: 120px;
}
</style>
