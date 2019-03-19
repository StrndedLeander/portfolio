<template>
  <div class="hero bottom is-flex-widescreen">
    <p>Leander van Diepen</p>
    <p>leandervand@gmail.com</p>
    <p id="git">https://github.com/StrndedLeander</p>
  </div>
</template>

<script>
export default {
  name: "Bottom"
};
</script>

<style scoped>
.bottom {
  background-color: #bbbbbb;
  text-align: center;
  margin-top: 15px;
}

p {
  margin: 22px 0 0 0;
  color: black;
}

#git {
  margin-bottom: 22px;
}
</style>
