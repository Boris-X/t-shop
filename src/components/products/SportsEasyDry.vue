<!--template>
  <div class="easydry">
    <h1>This is a easydry page</h1>
  </div>
</template-->

<template>
  <div>
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

let flag = true;
const tab = ref(1);
const route_LEV = {
  '/products/underwear': 0,
  '/products/trousers': 1
}
router.push("/products/trousers");
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
    /*
    $route(to, from) {
      console.log("watch");
      let LEVEL = this.LEVEL
      let toDepth = LEVEL[to.path]
      let fromDepth = LEVEL[from.path]
      if ((toDepth === -1 || fromDepth === -1) || toDepth === fromDepth) {
        this.transitionName = ''
      } else {
        this.transitionName = toDepth < fromDepth ? 'fade-right' : 'fade-left'
      }
    }
    */
  },
  mounted(){
      // 浏览器兼容   
      if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        document.addEventListener("DOMMouseScroll", this.scrollFun, false);
      } else if (document.addEventListener) {
        document.addEventListener("mousewheel", this.scrollFun, false);
      } else if (document.attachEvent) {
        document.attachEvent("onmousewheel", this.scrollFun);
      } else {
        document.onmousewheel = this.scrollFun;
      }
  },
  methods:{
    scrollFun() {
      console.log("scroll");
      if(flag)
      {
        flag = false;       
        router.push("/products/underwear");
        this.transitionName = 'slide-left';
      }else{
        flag = true;
        router.push("/products/trousers");
        this.transitionName = 'slide-right';
      }
    },
    btnTime(id){
      tab.value=id;
      router.push("/products/trousers");
    },
    click() {
     
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
  
  .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

</style>