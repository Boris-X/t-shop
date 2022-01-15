<template>
  <div class="container">
    <Nav v-model="activeType" :items="typeList" />
  </div>  
  <router-view />
</template>

<script setup>
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

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
