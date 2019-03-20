<template>
  <div class="hero header is-block-desktop-only is-flex-touch">
    <div class="title">
      <p class="brand">Leander van Diepen</p>
      <p class="desc">Software Development</p>
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
  margin-left: auto;
  margin-right: auto;
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
</style>
