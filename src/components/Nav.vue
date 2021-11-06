<script setup>
import { defineProps } from "vue";
//import { ref } from "vue"
import { debounce } from "lodash-es";
import router from "@/router/index.js"

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  /*
  ritems: {
    type: Array,
    required: true,
  },*/
  modelValue: {
    type: String,
    default: "",
  },
});

let routerList = [ "/", "/products", "/aboutus", "/news", "/book", "/contactus" ];

const handleClick=debounce(function(tab) {
  //console.log(tab.index);
  //console.log(event);
  router.push(routerList[tab.index]);
}, 1000)


</script>



<template>
  <el-affix :offset="0">
    <div class="navbar">
      <!--div class="header">
        <img class="header__logo" src="../img/main-logo.png" />
      </div-->
      <div class="tab">
        <el-tabs
          type="card"
          :model-value="props.modelValue"
          @tab-click="handleClick"
        >
          <el-tab-pane
            v-for="item in props.items"
            :key="item"
            :label="item"
            :name="item"
          >
          </el-tab-pane>
        </el-tabs>
      </div> 
    </div>
  </el-affix>
</template>



<style>
.navbar {
  background-color: rgba(0, 0, 0, 1);
}
.header {
  padding: 32px 16px;
}
.header__logo {
  width: 180px;
}

.search-input{
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.search-button img {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-top: 7px;
    margin-left: 7px;
    margin-right: 7px;
}

</style>