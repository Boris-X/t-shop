<template>
  <div class="contactus">
    <div class="container">
      <carousel
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item
          v-for="(item, index) of carData"
          :key="index"
        >
          <!--img :src="require('../assets/img/' + item.img_name)" /-->
          <img :src="require(`../assets/img/${item.img_name}`)" />
        </car-item>
      </carousel>
    </div>
  </div>
</template>

<script>
import carData from '@/data/carousel'

export default {
  name: 'contactus',
  setup () {
    return {
      carData
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 520px;
    height: 280px;
    magin: 150px auto;
  }
</style>