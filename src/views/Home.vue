<template>
  <div class="home">
    <img class="home-logo" alt="logo" src="../assets/marcy.svg">
    <p class="name">Marcy</p>
    <p class="location"><font-awesome-icon :icon="['fas','map-marker-alt']" /> NIT SNCT 4I</p>
    <div class="home-profile" v-for="(contact, key) in contacts" :key="contact.id">
      <a href=contact.url v-on:mouseover="mouseOverAction(key)" v-on:mouseleave="mouseLeaveAction" class="contact"><font-awesome-icon :icon="['fab',contact.name]" /></a>
    </div>
    <p v-if="hoverFlag">{{contact_message}}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      contact_message: "Twitter",
      contacts: [
        { id: 0, url: 'https://twitter.com/_marcy___', name: 'twitter' },
        { id: 1, url: 'https://github.com/MAAAARCY', name: 'github' },
        { id: 2, url: 'https://www.youtube.com/channel/UCR2_LxRO2dsP-uSWI5Y2eFg', name: 'youtube' }
      ],
      hoverFlag: false,
      hoverIndex: null
    }
  },
  methods: {
    mouseOverAction(key) {
      this.hoverFlag = true;
      this.hoverIndex = key;
      console.log(key);
      this.contact_message = this.contacts[key].name.charAt(0).toUpperCase() + this.contacts[key].name.slice(1);
    },
    mouseLeaveAction() {
      this.hoverFlag = false;
    }
  }
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
  justify-content: center;
}

.contact {
  font-size: 2em;
  padding: 0.3em;
  color: #000000;
}

.name {
  font-size: 250%;
}

.location {
  font-size: 120%;
}
</style>
