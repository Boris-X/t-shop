<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h4>This is a home page</h4>
    <div class="test">测试用</div>
    <span>随便试试</span> <br />
    <span>另外一行</span>
    <div class="pic">
      <a href="http://www.baidu.com"
        ><img src="../assets/img/1.jpg" alt="" title="我是hunter"
      /></a>
    </div>
    <a href="http://www.baidu.com" style="text-decoration: none">网络链接</a>

    <table align="center" width="500" height="249" border="1" cellspacing="0" cellpadding="4">
      <thead>
        <tr>
          <th>排名</th>
          <th>关键词</th>
          <th>趋势</th>
          <th>进入搜索</th>
          <th>最近七日</th>
          <th>相关链接</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>三国演义</td>
          <td><img src="" /></td>
          <td>456</td>
          <td>123</td>
          <td>
            <a href="#">贴吧</a> <a href="#">图片</a> <a href="#">百科</a>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>三国演义</td>
          <td><img src="" /></td>
          <td>456</td>
          <td>123</td>
          <td>
            <a href="#">贴吧</a> <a href="#">图片</a> <a href="#">百科</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup>
// @ is an alias to /src
/*
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
.test {
  font-size: 16px;
  color: red;
  text-align: center;
}
.pic {
  text-align: center;
}
</style>
