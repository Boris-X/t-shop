
<template>
  <div class="container">
    <Nav v-model="activeType" :items="typeList" />
  </div>  
  <router-view />
</template>

<script setup>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import { ref, computed, watchEffect } from "vue";

const tabList = ref([ "首页", "产品展示", "关于我们", "新闻中心", "团装定制", "联系我们" ]);
const activeType = ref("");



const typeList = computed(() => {
  return tabList.value;
});

// Reset active when data list chagnes.
watchEffect(() => {
  const invalid = tabList.value.indexOf(activeType.value) === -1;

  if (invalid) {
    activeType.value = tabList.value[0] || "";
  }
});

/*
computed(() => {
  if(activeType.value === tabList.value[0])
  {
    router.push("Home");
  }
  else if(activeType.value === tabList.value[1])
  {
    router.push("Products");
  }
});
*/

</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
