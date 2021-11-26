<template>
  <div class="clothesseries">
    <h1>This is a clothesseries page</h1>
  </div>
  <button type="button" @click="click">点击</button>
</template>

<script>
import router from "@/router/index.js"
export default {
 name: 'name',
 data () {
   return {

   }
 },
 mounted () {
 },
 methods: {
   click() {
     router.push("/products/trousers");
   }
 }
}
</script>
