<template>
  <div>
    <the-banner />
    <banner-carousel style="margin-top: 4rem" />
  </div>
</template>

<script>
import TheBanner from '@/components/Home/Banner'
import BannerCarousel from '@/components/Home/BannerCarousel'

export default {
  name: 'Home',
  components: {
    TheBanner,
    BannerCarousel,
  },
}
</script>
<style lang="scss" scoped></style>
