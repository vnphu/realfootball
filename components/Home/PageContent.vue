<template>
  <div>
    <div class="selling-home">
      <ul>
        <li v-for="item in data.data" :key="item.id">
          <nuxt-link to="/product">
            <img :src="item.image" :alt="item.image" />
            <div class="title">{{ item.title }}</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.data = await this.$axios.$get('/blog')
  },
  data() {
    return { data: [] }
  },
}
</script>
<style lang="scss" scoped>
.selling-home {
  margin: 5rem 0rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    li {
      width: 33%;
      margin: auto;
      position: relative;

      &:hover {
        .title {
          opacity: 0;
        }
        img {
          opacity: 0.7;
        }
      }
      img {
        width: 100%;
        transition: all 1s;
      }
      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        font-size: 2rem;
        font-weight: bold;
        transition: all 1s;
      }
    }
  }
}
</style>
