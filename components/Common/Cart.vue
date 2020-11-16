<template>
  <div class="cart-window">
    <div class="title">Your cart</div>
    <div v-if="cartItem !== null" class="content">
      <div class="items">
        <div v-for="item in cartItem" :key="item.id" class="item">
          <div class="img">
            <img :src="item.image[0]" :alt="item.name" />
          </div>
          <div class="item-child">
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="price">Price: {{ item.price }} $</div>
            </div>
            <div class="out">
              <a-tag> X{{ item.number }}</a-tag>
              <a-tag color="red" class="delete" @click="removeThing(item.id)">
                Delete
              </a-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="pay">
        <div class="total">
          <a-tag color="red"> Total: {{ total }} $</a-tag>
        </div>
        <button @click="onPay">Payment</button>
      </div>
    </div>
    <div v-else>Empty</div>
  </div>
</template>
<script>
export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    cartItem() {
      return this.$store.getters.cartItems
      // eslint-disable-next-line no-console
      // console.log(data)
    },
    total() {
      const result = this.$store.getters.cartItems
      return result.reduce((total, result) => {
        return total + result.price
      }, 0)
    },
  },
  methods: {
    onPay() {
      this.$notification.open({
        message: 'Payment',
        description: 'Success',
        icon: <a-icon type="check" style="color: green" />,
      })
    },
    removeThing(id) {
      this.$confirm({
        title: 'Are you sure you want to delete?',
        okType: 'danger',
        okText: 'OK',
        cancelText: 'Cancel',
        onOk: () => {
          this.$store.commit('outCart', id)
          this.$notification.open({
            message: 'Remove Item',
            description: 'Success',
            icon: <a-icon type="check" style="color: green" />,
          })
        },
      })
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
  width: 50%;
  margin: auto;
}
.pay {
  width: 100%;
  display: flex;
  margin: 2rem;
  justify-content: space-around;
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
  .total {
    display: flex;
    align-items: center;
  }
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  .items {
    .item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 10rem;
        height: 10rem;
        margin: 1rem 2rem;
      }
      .name {
        color: var(--black);
        font-weight: 500;
      }
      .price {
        color: var(--red);
      }
      .item-child {
        width: 90%;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .out {
        .delete {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
