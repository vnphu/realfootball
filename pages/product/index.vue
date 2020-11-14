<template>
  <div class="container">
    <div class="product">
      <the-card
        v-for="item in data.data"
        :key="item.id"
        :data="item"
        class="thecard"
      >
        {{ item }}
      </the-card>

      <a-button type="danger" @click.prevent="onShowSizeChange">
        Show more
      </a-button>
    </div>
  </div>
</template>

<script>
import TheCard from '@/components/Product/Card'

export default {
  name: 'Home',
  components: {
    TheCard,
  },
  async fetch() {
    this.data = await this.$axios.$get(`/product?limit= ${this.pageSize}`)
  },
  data() {
    return {
      data: [],
      pageSize: 8,
    }
  },
  create() {
    this.fetch()
  },
  methods: {
    onShowSizeChange(pageSize) {
      this.pageSize += 8
      this.$fetch()
    },
  },
}
</script>
<style lang="scss" scoped>
div {
  div.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;

    .thecard {
      width: 23%;
      margin: 1rem 1%;
    }
  }
  .ant-btn {
    width: 30rem;
    margin: 5rem auto;
  }
}
</style>
