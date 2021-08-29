<template>
    <img v-bind:src="url" class="product-img">
</template>

<script>
export default {
    props: {
        url: String
    }
}
</script>

<style>

.product-img {
    width: 100%;
    height: 100%;
}
</style>