
<template>
  <div class="products">
    <div :style="{color: tab == 1 ? '#1890ff' : '',background: tab == 1 ? '#d0e9ff' : ''}" class="nowTime centre3" @mouseover="btnTime(1)">白小T系列</div>
    <div :style="{color: tab == 2 ? '#1890ff' : '',background: tab == 2 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(2)">上装系列</div>
    <div :style="{color: tab == 3 ? '#1890ff' : '',background: tab == 3 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(3)">下装系列</div>
    <div :style="{color: tab == 4 ? '#1890ff' : '',background: tab == 4 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(4)">运动速干</div>
    <div :style="{color: tab == 5 ? '#1890ff' : '',background: tab == 5 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(5)">内衣系列</div>
  </div>

  <router-view />
</template>

 
<script setup>
import { ref } from "vue"
import router from "@/router/index.js"

let routerList = [ "/products/smallt", "/products/clothesseries", "/products/trousers", "/products/sportseasydry", "/products/underwear" ];
const tab = ref(1);
router.push(routerList[0]);

function btnTime(id) {
  tab.value=id;
  router.push(routerList[id - 1]);
}

</script>


<style>
.products {
  display: flex;
  justify-content: center;
}


.level {
  display: flex;
  flex-direction: row;
}
 .nowTime {
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
    color: #686868;
    cursor: pointer;
  }
  .otherTime {
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
    color: #686868;
    cursor: pointer;
  }
</style>