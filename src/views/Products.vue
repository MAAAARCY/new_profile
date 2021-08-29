<template>
  <div class="products">
    <h1>Marcy's Products</h1>
    <div class="products-list" v-for="(product, key) in products" :key="product.id">
      <p class="product">
        <ProductCard :url="`${product.img_url}`" />
        <a v-bind:href="`${product.url}`" v-on:mouseover="mouseOverAction(key)" v-on:mouseleave="mouseLeaveAction">{{ product.title }}</a>
      </p>
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
          url: "",
          img_url: require('../assets/products/profile.png'),
          title: "Profile"
        },
        {
          id: 1,
          url: "https://maaaarcy.github.io/Typing-Adventurer/",
          img_url: require('../assets/products/TypingAdventurer.png'),
          title: "Typing Adventurer"
        },
        {
          id: 2,
          url: "https://www.slideshare.net/ShomaKobayashi/liverary",
          img_url: require('../assets/products/Liverary.png'),
          title: "Liverary"
        }
      ]
    }
  },
  methods: {
    mouseOverAction(key) {
      this.product_url = this.products[key].url;
    },
    mouseLeaveAction() {},
  }
}
</script>

<style>

.products {
  text-align: center;
}

.products-list {
  display: inline-flex;
  justify-content: center;
}

.product {
  font-size: 2em;
  padding: 0.3em;
  width: 350px;
  text-decoration: none;
  color: #ffffff;
}

.product-img {
  width: 100%;
  height: 100%;
}
</style>