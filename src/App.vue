<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <!--<router-link to="/works">Works</router-link>-->
    </div>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
body {
  background-color: #696969;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  padding: 0.5em;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
