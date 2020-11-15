<template>
  <div class="cart-window">
    <div class="title">Your cart</div>
    <div v-if="cartItem !== null" class="content">
      <div v-for="item in data" :key="item.id">
        {{ item }}
      </div>
      <div class="pay">
        <button @click="onPay">Pay</button>
      </div>
    </div>
    <div v-else>Empty</div>
  </div>
</template>
<script>
export default {
  data() {
    return { data: [] }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    cartItem(data) {
      data = this.$store.getters.cartItems
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem 3rem;
  border-bottom: 1px solid var(--gray);
}
.cart-window {
  position: absolute;
  width: 40rem;
  top: 5.3rem;
  right: -2rem;
  height: calc(100vh - 15rem);
  background-color: #fff;
  z-index: 9 !important;
  box-shadow: var(--shadow);
  border-radius: 1rem;
}
.pay {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  button {
    padding: 1rem 3rem;
    border-radius: 0.3rem;
    color: var(--white);
    background: var(--red);
    &:hover {
      opacity: 0.5;
    }
  }
}
.content {
  display: flex;
  align-content: space-between;
}
</style>
