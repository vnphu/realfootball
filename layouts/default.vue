<template>
  <div>
    <layout-header class="header" />
    <the-banner />
    <Nuxt />
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '@/components/Layout/Header'
import LayoutFooter from '@/components/Layout/Footer'
import TheBanner from '@/components/Home/Banner'
export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    TheBanner,
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: sticky;
}
</style>
