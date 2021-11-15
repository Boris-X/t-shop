<!--template>
  <div class="easydry">
    <h1>This is a easydry page</h1>
  </div>
</template-->

<template>
  <div class="container"> 
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <keep-alive>
            <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

 
<script>
import { ref } from "vue"
import router from "@/router/index.js"

const tab = ref(1);
const route_LEV = {
  '/products/clothesseries': 0,
  '/products/trousers': 1
}
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      LEVEL: route_LEV,
      tab
    }
  },
  watch: {
    '$route' (to, from) {
      let LEVEL = this.LEVEL
      let toDepth = LEVEL[to.path]
      let fromDepth = LEVEL[from.path]
      if ((toDepth === -1 || fromDepth === -1) || toDepth === fromDepth) {
        this.transitionName = ''
      } else {
        this.transitionName = toDepth < fromDepth ? 'fade-right' : 'fade-left'
      }
    }
  },
  methods:{
    btnTime(id){
      tab.value=id;
      router.push("/products/trousers");
    }
  }
  
}
</script>
 
<style scoped>
  *{
  margin: 0;
  padding: 0;
  } 

  .container{
    background-color: #eeeeee;
    height: 400px;
  }
  .fade-left-enter-active,.fade-right-enter-active{
    transition: all .08 ease
  }
  .fade-left-leave-active, .fade-right-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  }
  .fade-left-leave-to, .fade-right-enter{
    transform: translate3d(-50%, 0, 0);
    opacity: 0
  }
  .fade-left-enter, .fade-right-leave-to{
    transform: translate3d(50%, 0, 0);
    opacity: 0
  }
</style>