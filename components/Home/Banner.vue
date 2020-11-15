<template>
  <div class="banner-title">
    <img
      src="https://www.lovellsoccer.co.uk/cms/graphics/20-off-Thin-Banner-Recovered.jpg"
      alt="banner"
    />
  </div>
</template>

<script>
export default {
  name: 'TheBanner',
}
</script>
<style lang="scss" scoped>
.banner-title {
  position: relative;
  z-index: -1;
  height: 3.5rem;
  img {
    width: auto !important;
    max-width: none;
    height: 100%;
    animation: sildeOffersBanner 20s linear infinite;
  }
}
@keyframes sildeOffersBanner {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% + 100vw));
  }
}
</style>
