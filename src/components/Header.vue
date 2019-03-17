<template>
  <div class="hero header is-flex-widescreen">
    <div class="columns">
      <div class="column is-two-fifths"></div>
      <div class="column">
        <div class="title">
          <p class="brand">Leander van Diepen</p>
          <p class="desc">Software Development</p>
        </div>
      </div>
      <!-- <div class="column navigation">
        <div class="columns">
          <div class="column">
            <p>About</p>
          </div>
          <div class="column">
            <p>Projects</p>
          </div>
          <div class="column">
            <p>Cases</p>
          </div>
          <div class="column">
            <p>Contact</p>
          </div>
      </div>-->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  max-width: 100vw;
  height: 80px;
  border: 1px grey solid;
  text-align: center;
  color: #707070;
}

.title {
  width: 261px;
  height: 31px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.title .brand {
  font-weight: 400;
  color: #707070;
  font-size: 65%;
  margin-top: 12px;
}

.title .desc {
  font-weight: 400;
  color: #707070;
  font-size: 35%;
  padding-top: 10px;
}

.navigation {
  margin-top: 31px;
  margin-right: 228px;
}
</style>
