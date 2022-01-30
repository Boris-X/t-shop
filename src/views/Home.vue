<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h4>This is a home page</h4>
    <div class="test">测试用</div>
    <span>随便试试</span> <br />
    <span>另外一行</span>
    <div class="pic">
      <a href="http://www.baidu.com"
        ><img
          src="../assets/5322affb9ad6c.png"
          alt=""
          title="我是hunter"
          width="60"
          height="40"
      /></a>
      <img
        src="../assets/cad.static.0bfb6a6d0adf4f3b1c28c0c90248b18b.svg"
        alt=""
        title="我是hunter"
        width="60"
        height="40"
      />
    </div>
    <a href="http://www.baidu.com" style="text-decoration: none">网络链接</a>

    <table
      align="center"
      width="500"
      height="249"
      border="1"
      cellspacing="0"
      cellpadding="4"
    >
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

    <ul style="list-style: none">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>
        5
        <p>是个大容器</p>
      </li>
    </ul>

    <ol>
      <li>刘德华</li>
      <li>郭富城</li>
      <li>杰克逊</li>
      <li>张学友</li>
      <li>黎明</li>
    </ol>

    <dl>
      <dt>小标题</dt>
      <dd>内容1</dd>
      <dd>内容2</dd>
    </dl>

    <form action="xxx.php" method="get">
      <label for="name">用户名: </label
      ><input type="text" name="username" id="name" /> <br />
      <label for="password">密码： </label>
      <input type="password" name="pwd" id="password" /> <br />
      性别： 男
      <input type="radio" name="sex" value="男" checked="checked" /> 女
      <input type="radio" name="sex" /> 人妖 <input type="radio" name="sex" />
      <br />
      爱好: 吃饭
      <input type="checkbox" value="吃饭" checked="checked" name="hobby" /> 睡觉
      <input type="checkbox" value="睡觉" checked="checked" name="hobby" />
      打豆豆 <input type="checkbox" value="打豆豆" name="hobby" /> <br />

      <input type="submit" />
      <input type="reset" />
    </form>

    <label for="area">籍贯</label>
    <select id="area">
      <option>北京</option>
      <option>山东</option>
      <option selected="selected">天津</option>
      <option>火星</option>
    </select>
  </div>

  <div class="three">
    <div class="one">红色</div>
    <div class="two">蓝色</div>
    <div id="thr">粉色</div>
  </div>

  <!-- 并集选择器 -->
  <div class="bing">
    <div>熊大</div>
    <p>熊二</p>
    <span>光头强</span>
    <ul class="pig">
      <li>小猪佩奇</li>
      <li>猪爸爸</li>
      <li>猪妈妈</li>
    </ul>
  </div>

  <div class="atest">
    <a href="#">小猪猪</a>
  </div>

  <div class="xiaomi">
    <a href="#">手机 电话卡</a>
    <a href="#">电视 盒子</a>
    <a href="#">笔记本 平板</a>
    <a href="#">出行 穿戴</a>
    <a href="#">智能 路由器</a>
    <a href="#">健康 儿童</a>
    <a href="#">耳机 音响</a>
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
/* * {
  padding: 0;
  margin: 0;
} */
.home {
  text-indent: 2em;
}
.test {
  font-size: 16px;
  color: red;
  text-align: center;
}
.pic {
  text-align: center;
}
.three div {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border: 2px solid black;
  line-height: 200px;
  text-align: center;
  color: black;
  font-size: 30px;
}
.one {
  background-color: red;
}
.two {
  background-color: blue;
}
#thr {
  background-color: pink;
}
.bing div, p, .pig li {
  color: pink;
}

.atest a:link {
  color: #333;
  text-decoration: none;
}

.atest a:visited {
  color: orange;
}

.atest a:hover {
  color: skyblue;
}

.atest a:active {
  color: green;
}

.xiaomi a:hover {
  background: orange;
}

.xiaomi a {
  height: 50px;
  width: 200px;
  display: block;
  background: #000;
  text-indent: 2em;
  line-height: 50px;
  text-decoration: none;
  color: white;
}

</style>
