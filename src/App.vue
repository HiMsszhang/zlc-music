<template>
  <div id="app">
    <el-container>
      <el-header style="height: 50px">
        <router-view name="topBar" />
      </el-header>
      <el-container>
        <el-aside style="width: 222px">
          <router-view name="leftBar"
        /></el-aside>
        <el-container>
          <el-main>
            <router-view  />
          </el-main>
        </el-container>
      </el-container>
      <el-footer><router-view name="player" /></el-footer>
    </el-container>
  </div>
</template>

<script>
import topBar from "@/components/topBar.vue";
import leftBar from "@/components/leftBar.vue";
import player from "@/components/player";
import home from "./components/home.vue";
export default {
  data() {
    return {};
  },
  components: {
    topBar,
    leftBar,
    player,
    home,
  },
};
</script>

<style lang="less">
* {
  padding: 0%;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
#app {
  width: 100%;
  height: 100vh;
  background: #fafafa;
}
#app .el-header {
  padding: 0;
}
#app .el-footer {
  padding: 0;
}
#app .el-main {
  padding: 0;
}
</style>
