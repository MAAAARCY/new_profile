<template>
  <div class="home">
    <img class="home-logo" alt="logo" src="../assets/marcy.svg">
    <div class="home-profile">
      <p class="name">Marcy</p>
      <ul>
        <li>twitter: @_marcy___</li>
      </ul>
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
  display: block;
}

.home-profile ul {
  list-style: none;
  display: inline-block;
}

.home-profile ul li{
  text-align: left;
}

.name {
  font-size: 150%;
}
</style>
