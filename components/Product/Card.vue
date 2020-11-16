<template>
  <div>
    <div class="cartItem">
      <img :src="data.image[0]" :alt="data.name" />
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
    addToCart() {
      // this.$store.dispatch('addItemToCart', data)
      // console.log(data, 'sads')
      const payload = {
        name: this.data.name,
        image: this.data.image,
        price: this.data.price,
        id: this.data.id,
        number: 1,
      }
      if (this.$store.dispatch('addItemToCart', payload)) {
        this.$notification.open({
          message: 'Add Item To Cart',
          description: 'Success',
          icon: <a-icon type="check" style="color: green" />,
        })
      } else {
        this.$notification.open({
          message: 'Add Item To Cart',
          description: 'Error',
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
    &:hover {
      .add {
        opacity: 1;
      }
    }
    img {
      width: 100%;
    }
    .title {
      color: var(--black);
    }
    .add {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--width);
      z-index: 9;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      font-size: 3rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary);
      box-shadow: var(--shadow);
      transition: all 0.4s;
      opacity: 0;
    }
  }
}
</style>
