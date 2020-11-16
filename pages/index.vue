<template>
  <div>
    <banner-carousel style="margin-top: 4rem" />
    <page-content />
  </div>
</template>

<script>
import BannerCarousel from '@/components/Home/BannerCarousel'
import PageContent from '@/components/Home/PageContent'

export default {
  name: 'Home',
  components: {
    BannerCarousel,
    PageContent,
  },
}
</script>
<style lang="scss" scoped></style>
