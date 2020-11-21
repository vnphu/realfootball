export default {
  computed: {
    filteredList() {
      return this.data.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
}
