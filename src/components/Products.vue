
<template>
  <div class="products">
    <div :style="{color: tab == 1 ? '#1890ff' : '',background: tab == 1 ? '#d0e9ff' : ''}" class="nowTime centre3" @mouseover="btnTime(1)">阿星</div>
    <div :style="{color: tab == 2 ? '#1890ff' : '',background: tab == 2 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(2)">伊天仇</div>
    <div :style="{color: tab == 3 ? '#1890ff' : '',background: tab == 3 ? '#d0e9ff' : ''}" class="otherTime centre3"  @mouseover="btnTime(3)">周星星</div>
    <div :style="{color: tab == 4 ? '#1890ff' : '',background: tab == 4 ? '#d0e9ff' : ''}" class="otherTime centre3"  @click="btnTime(4)">王小虎</div>
  </div>
</template>


<script setup>
import { ref } from "vue"
const tab = ref(1);

function btnTime(id) {
  tab.value=id;
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