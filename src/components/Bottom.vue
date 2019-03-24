<template>
  <div class="hero bottom is-block-desktop-only is-flex-touch">
    <div class="container bottomInfo has-text-centered">
      <p>Leander van Diepen</p>
      <p>leandervand@gmail.com</p>
      <p id="git">
        <a href="https://github.com/StrndedLeander">https://github.com/StrndedLeander</a>
      </p>
    </div>
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
  margin-top: 15px;
}
.bottomInfo {
  margin-left: auto;
  margin-right: auto;
}
p {
  margin: 22px 0 0 0;
  color: black;
}
a {
  color: black;
}

#git {
  margin-bottom: 22px;
}
</style>
