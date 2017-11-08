<template>
  <div>
    <home-header></home-header>
    <home-main></home-main>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/layouts/HomeHeader'
import HomeMain from '@/components/home/layouts/HomeMain'

export default {
  components: {
    HomeHeader, HomeMain
  },
  data () {
    return {

    }
  }
}
</script>

