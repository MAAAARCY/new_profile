<template>
  <div class="products">
    <h1>Marcy's Products</h1>
    <div class="products-list" v-for="(product, key) in products" :key="key">
      <ProductCard
        v-bind:title="`${product.title}`"
        v-bind:url="`${product.img_url}`"
        v-bind:linkUrl="`${product.link_url}`"
        v-bind:githubUrl="`${product.github_url}`" class="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"

export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      product_url: "https://maaaarcy.github.io/Typing-Adventurer/",
      products: [
        {
          id: 0,
          link_url: "/products",
          github_url: "https://github.com/MAAAARCY/new_profile",
          img_url: require('../assets/products/profile.png'),
          title: "Profile"
        },
        {
          id: 1,
          link_url: "https://maaaarcy.github.io/Typing-Adventurer/",
          github_url: "https://github.com/MAAAARCY/Typing-Adventurer-Project",
          img_url: require('../assets/products/TypingAdventurer.png'),
          title: "Typing Adventurer"
        },
        {
          id: 2,
          link_url: "https://www.slideshare.net/ShomaKobayashi/liverary",
          github_url: "/products",
          img_url: require('../assets/products/Liverary.png'),
          title: "Liverary"
        }
      ]
    }
  },
  /*
  methods: {
    mouseOverAction(key) {
      this.product_url = this.products[key].url;
    },
    mouseLeaveAction() {},
  }
  */
}
</script>

<style>

.products {
  text-align: center;
}

.products-list {
  display: inline-block;
  justify-content: center;
}

.product {
  margin: 20px;
}

.product-img {
  width: 100%;
  height: 100%;
}
</style>