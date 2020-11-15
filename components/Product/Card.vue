<template>
  <div>
    <div class="cartItem">
      <img :src="data.image" alt="data.title" />
      <div class="title">
        {{ data.name }}
      </div>
      <div class="price">
        {{ data.price }}
      </div>
      <div class="add" @click="addToCart">
        <a-icon type="shopping-cart" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(data) {
      // this.$store.dispatch('addItemToCart', data)
      if (this.$store.dispatch('addItemToCart', data)) {
        this.$notification.open({
          message: 'Add Item To Cart',
          description: 'Success',
          icon: <a-icon type="check" style="color: green" />,
        })
      } else {
        this.$notification.open({
          message: 'Add Item To Cart',
          description: 'Địt mẹ check lỗi đi',
          icon: <a-icon type="close" style="color: red" />,
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
div {
  .cartItem {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .add {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--width);
      z-index: 9;
      width: 2rem;
      height: 2rem;
      border-radius: 0.1rem solid #fff;
      font-size: 3rem;
      cursor: pointer;
    }
  }
}
</style>
