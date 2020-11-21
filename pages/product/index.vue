<template>
  <div class="container">
    <div class="search">
      <input
        v-model="search"
        type="text"
        placeholder="Enter name to search"
        @keyup.enter="onSearch"
      />
    </div>
    <div class="product">
      <the-card
        v-for="item in filteredList"
        :key="item.id"
        :data="item"
        class="thecard"
      >
        {{ item }}
      </the-card>

      <div class="showMore">
        <a-button type="danger" @click.prevent="onShowSizeChange">
          Show more
        </a-button>
      </div>
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
    const result = await this.$axios.$get(`/product?limit= ${this.pageSize}`)
    return (this.data = result.data)
  },
  data() {
    return {
      data: [],
      pageSize: 8,
      search: '',
    }
  },
  computed: {
    filteredList() {
      return this.data.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },

  methods: {
    onShowSizeChange(pageSize) {
      this.pageSize += 8
      this.$fetch()
    },
    onSearch(data) {
      this.$notification.open({
        message: 'Search',
        description: 'Chức năng này đang phát triển',
        icon: <a-icon type="close" style="color: red" />,
      })
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
  .search {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 4rem;

    input {
      border-radius: 0.5rem;
      border-bottom: 1px solid var(--gray);
      padding: 1rem 2rem;
      width: 30rem;
      margin-left: 3rem;
    }
  }
  .product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    z-index: 1;
    position: relative;

    .thecard {
      width: 23%;
      margin: 1rem 1%;
    }
  }
  .ant-btn {
    width: 30rem;
    margin: 3rem auto;
    &:hover {
      opacity: 0.5;
    }
  }
  .showMore {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
}
</style>
