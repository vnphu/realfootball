<template>
  <div>
    <div class="title">QUICK AND EASY RETURNS</div>
    <header>
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="https://www.lovellsoccer.co.uk/images/soccer/logo.svg?1"
            alt="Logo"
          />
        </nuxt-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <nuxt-link to="product">All Product</nuxt-link>
          </li>
          <li>
            <nuxt-link to="nike">Nike</nuxt-link>
          </li>
          <li>
            <nuxt-link to="adidas">Adidas</nuxt-link>
          </li>
          <li>
            <nuxt-link to="puma">Puma</nuxt-link>
          </li>
          <li>
            <nuxt-link to="newbalance">New Balance</nuxt-link>
          </li>
          <li>
            <nuxt-link to="mizuno">Mizuno</nuxt-link>
          </li>
          <li>
            <nuxt-link to="underarmour">Under Armour</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="service">
        <div class="search">
          <a-icon type="search" />
        </div>
        <div class="user">
          <a-icon type="user" />
        </div>
        <div class="cart">
          <nuxt-link to="/cart">
            <a-icon type="shopping-cart" />
            <div class="numberItem">
              {{ cartItem.length }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  computed: {
    cartItem() {
      return this.$store.getters.cartItems
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  .title {
    background-color: black;
    color: var(--white);
    display: flex;
    justify-content: center;
    padding: 0.7rem 0rem;
    width: 100vw;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: initial;
        li {
          padding: 1rem 1.5rem;
          a {
            color: var(--gray);
            font-weight: 500;
            transition: all 0.3s;
            &:hover {
              color: var(--purple);
            }
            &.nuxt-link-exact-active {
              color: var(--pink);
            }
          }
        }
      }
    }
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        i {
          padding: 1rem;
          font-size: 2rem;
          cursor: pointer;
        }
      }
    }
  }
}
.cart {
  position: relative;
  a {
    color: var(--gray);
    position: relative;
    .numberItem {
      position: absolute;
      top: -1.3rem;
      right: -0.4rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      background: var(--gradient);
    }
  }
}
</style>
