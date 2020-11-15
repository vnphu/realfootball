<template>
  <div>
    <div class="title">QUICK AND EASY RETURNS</div>
    <header>
      <div class="logo">
        <img
          src="https://www.lovellsoccer.co.uk/images/soccer/logo.svg?1"
          alt="Logo"
        />
      </div>
      <div class="menu">
        <a-menu mode="horizontal">
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Nike </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Adidas </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Nike </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Adidas </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Adidas </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Adidas </span>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="service">
        <div class="search">
          <a-icon type="search" />
        </div>
        <div class="user">
          <a-icon type="user" />
        </div>
        <div class="cart">
          <a-icon type="shopping-cart" @click="isShow = !isShow" />
          <div class="numberItem" @click="isShow = !isShow">
            {{ cartItem.length }}
          </div>
          <cart v-if="isShow" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return { isShow: false }
  },
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
    padding: 1rem 2rem;
    .menu {
      font-size: 1.2rem;
      .ant-menu {
        border: initial;
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

  .numberItem {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background: var(--gradient);
  }
}
</style>
