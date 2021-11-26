<template>
  <div class="trousers">
    <h1>This is a trousers page</h1>
  </div>
  <button type="button" @click="click">点击</button>
</template>

<script>
import router from "@/router/index.js"
export default {
 name: 'trousers',
 data () {
   return {

   }
 },
 mounted () {
 },
 methods: {
   click() {
     router.push("/products/clothesseries");
   }
 }
}
</script>