<template>
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
                  <img class="codeImg" src="../../assets/code.png">
                </figure>
              </div>
              <div class="column">
                <p>Website Creation</p>
              </div>
              <div class="column"></div>
            </div>
            <!-- End Top Case #1 -->
            <div>
              <p class="caseText">Get a website created after your wishes,
                <br>whether for personal use or for your company.
                <br>
                <br>For most use cases and with database and
                <br>server infrastructure if needed.
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <!-- Start Top Case #2 -->
            <div class="columns">
              <div class="column">
                <figure class="image is-80x40">
                  <img class="codeImg" src="../../assets/Uhr-Code-maintenance.png">
                </figure>
              </div>
              <div class="column">
                <p>Website Maintenance</p>
              </div>
              <div class="column"></div>
            </div>
            <!-- End Top Case #2 -->
            <div>
              <p class="caseText">Do your webservices need maintenance or
                <br>administration?
                <br>
                <br>Error fixing, site changes, responsivness and
                <br>backend infrastructure
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
.codeImg {
  width: 80px;
  height: 40px;
  margin-top: 35px;
  margin-left: 10px;
}
</style>