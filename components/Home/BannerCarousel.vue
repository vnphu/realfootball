<template>
  <a-carousel arrows autoplay>
    <div slot="prevArrow" class="custom-slick-arrow" style="left: 2rem">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" class="custom-slick-arrow" style="right: 2rem">
      <a-icon type="right-circle" />
    </div>
    <div v-for="item in data" :key="item.id" class="item">
      <img :src="item.image" :alt="item.name" />
      <div class="title">
        {{ item.type }}
      </div>
      <div class="description">
        {{ item.description }}
      </div>
    </div>
  </a-carousel>
</template>
<script>
export default {
  async fetch() {
    this.data = await this.$axios.$get('/category')
  },
  data() {
    return { data: [] }
  },
}
</script>
<style lang="scss" scoped>
/* For demo */
.ant-carousel .slick-slide {
  text-align: center;
  height: 80vh;
  /* line-height: 150px;
  background: #364d79; */
  overflow: hidden;
}
.item {
  height: 100%;
  position: relative;
  img {
    height: 100%;
    // width: 100vw;
    width: 100%;
  }
  .title {
    position: absolute;
    top: 1rem;
    left: 50%;
    color: var(--white);
    font-size: 3rem;
    opacity: 0.8;
  }
  .description {
    position: absolute;
    top: 35%;
    width: 40%;
    height: 30%;
    left: 50%;
    overflow-y: scroll;
    color: var(--white);
    font-size: 1.2rem;
    opacity: 0.8;
    text-align: justify;
  }
}
::-webkit-scrollbar {
  display: none;
}
.ant-carousel .custom-slick-arrow {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.5rem;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 99;
}

.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 1;
}
.slick-slider .slick-dots {
  height: 2rem;
}
.slick-active {
  height: 2rem;
  .item {
    .title,
    .description {
      animation: fadeOut 1s linear forwards;
    }
  }
}
@keyframes fadeOut {
  0% {
    left: 0%;
    opacity: 0;
  }
  100% {
    left: 50%;
  }
}
</style>
