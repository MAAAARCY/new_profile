<template>
  <div class="home">
    <img class="home-logo" alt="logo" src="../assets/marcy.svg">
    <p class="name">Marcy</p>
    <p class="connection">connection</p>
    <div class="home-profile">
      <a href="https://twitter.com/_marcy___" class="contact"><font-awesome-icon :icon="['fab','twitter']" /></a>
      <a href="https://github.com/MAAAARCY" class="contact"><font-awesome-icon :icon="['fab','github']" /></a>
      <a href="https://www.youtube.com/channel/UCR2_LxRO2dsP-uSWI5Y2eFg" class="contact"><font-awesome-icon :icon="['fab','youtube']" /></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style>

.home {
  text-align: center;
}

.home-logo{
  width:300px;
  height:300px;
  object-fit:cover;
  border-radius:50%;
}

.home-profile {
  display: inline-flex;
  width: 30%;
  justify-content: center;
}

.contact {
  font-size: 2em;
  padding: 0.3em;
}

.name {
  font-size: 250%;
}

.connection {
  font-size: 150%;
}
</style>
