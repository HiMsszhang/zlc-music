<template>
  <div class="top-bar">
    <div class="tb-left">
      <h1 class="logo"></h1>
      <div class="go-button">
        <button class="go-left">
          <img src="@/assets/image/zuojiantou.svg" alt />
        </button>
        <button class="go-right">
          <img src="@/assets/image/arrowRight.svg" alt />
        </button>
      </div>
      <div class="serch-w">
        <input class="i-serch" type="text" placeholder="搜索音乐，视频，歌词，电台" />
        <i class="iconfont">&#xe649;</i>
      </div>
    </div>

    <div class="tb-right">
      <div class="login">
        <div class="header-img"><img src="@/assets/image/user.svg" alt=""></div>
        <div class="username">
          未登入
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
};
</script>

<style lang="less">
.top-bar {
  width: 100%;
  background-color: #c62f2f;
  height: 50px;
  padding: 10px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.top-bar .tb-left .logo {
  overflow: hidden;
  background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?beb2f83b0c872f1653d6ccd75151e384");
  height: 40px;
  width: 160px;
  background-position: 0px -14px;
}
.top-bar .tb-left,
.tb-right {
  display: flex;
  width: 500px;
  justify-content: space-between;
}
.top-bar .tb-left .serch-w {
  position: relative;
}
.top-bar .tb-left .i-serch {
  width: 250px;
  height: 25px;
  border-radius: 25px;
  background-color: #a82828;
  border: none;
  padding-left: 10px;
  box-sizing: border-box;
  outline: none;
  color: #ca7d7d;
}
.top-bar .tb-left .serch-w .iconfont {
  position: absolute;
  right: 20px;
  color: #ca7d7d;
  cursor: pointer;
}
.top-bar .tb-left .go-button {
  display: flex;
  .go-left,
  .go-right {
    text-align: center;
    height: 25px;
    width: 30px;
    margin-top: 8px;
    color: #fff;
    background: #c62f2f;
    outline: none;
    border: 1px solid #a82828;
  }
  .go-left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .go-right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-left: -1px;
  }
}
 .tb-right .login {
   cursor: pointer;
    display: flex;
    .header-img{
      width: 25px;
      height: 25px;
      background-color: #e1e3e4;
      border-radius: 50%;
      margin-top: 8px;
      overflow: hidden;
      color: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .username{
      color: #eec1c1;
      margin-left: 10px;
      font-size: 14px;
    }
    .username:hover{
      color:#fff;
    }
  }
</style>
