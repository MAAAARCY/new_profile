<template>
    <div class="product">
        <img v-bind:src="url" loading=”lazy” class="product-img">
        <p class="product-title">{{ title }}</p>
        <p class="product-description">{{ description }}</p>
        <a v-if="linkUrl !== '/products' " v-bind:href="linkUrl" class="product-url"><font-awesome-icon :icon="['fas','link']" /></a>
        <a v-if="githubUrl !== '/products' " v-bind:href="githubUrl" class="product-url"><font-awesome-icon :icon="['fab','github']" /></a>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        url: String,
        linkUrl: String,
        githubUrl: String,
        description: String
    },
}
</script>

<style>

.product {
  font-size: 2em;
  width: 350px;
  height: 300px;
  padding-bottom: 110px;
  border: solid 5px #000000;
  border-radius: 5px;
  background-color: #ffffff;
}

.product-img {
    /width: 100%;
    /height: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.product-title {
    margin: 0px;
    padding: 0px;
    font-size: 70%;
}

.product-description {
    margin: 0px;
    padding: 0px;
    font-size: 50%;
}

.product-url {
    font-size: 80%;
    margin-left:10px;
    margin-right:10px;
    color: #000000;
}
</style>