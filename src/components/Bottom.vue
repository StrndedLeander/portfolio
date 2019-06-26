<template>
  <div class="hero bottom is-block-desktop-only is-flex-touch">
    <div class="container bottomInfo has-text-left">
      <p><a href="https://www.linkedin.com/in/leander-van-724119189/"  target="_blank"><span class="icon"><i class="fab fa-linkedin-in"></i></span>Leander van Diepen</a></p>
      <p><span class="icon"><i class="far fa-envelope"></i></span>leandervand@gmail.com</p>
      <p id="git">
        <a href="https://github.com/StrndedLeander" target="_blank"><span class="icon"><i class="fab fa-github"></i></span>https://github.com/StrndedLeander</a>
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
  min-width: 250px;
  max-width: 300px;
  margin: auto;
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
