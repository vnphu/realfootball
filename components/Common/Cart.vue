<template>
  <div class="a">
    {{ cartItem }}
  </div>
</template>
<script>
export default {
  computed: {
    cartItem() {
      return this.$store.state.cartItems
    },
  },
}
</script>
<style lang="scss" scoped>
.a {
  z-index: 9999;
  background-color: #fff;
}
</style>
