<template>
  <div class="left-bar">
    <div class="recommend">
      <div class="title">推荐</div>
      <ul class="recommend-list">
        <li>发现音乐</li>
        <li>私人FM</li>
        <li>LOOK直播</li>
        <li>视频</li>
        <li>朋友</li>
      </ul>
    </div>

    <div class="my-music">
      <div class="title">我的音乐</div>
      <ul class="my-music-list">
        <li>本地音乐</li>
        <li>下载管理</li>
        <li>我的音乐云盘</li>
        <li>我的电台</li>
        <li>我的收藏</li>
      </ul>
    </div>

    <div class="setup-music-list">
      <el-collapse>
        <el-collapse-item title="创建的歌单">
          <ul>我喜欢的音乐</ul>
        </el-collapse-item>
        <el-collapse-item title="收藏的歌单">
          <ul>阿八八八八八八八八八八八</ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style lang="less">
.mar-20 {
  margin-bottom: 20px;
}
.titled {
  color: #7d7d7d;
  font-size: 16px;
}
.margined {
  margin-top: 15px;
  margin-left: 15px;
}
.liststyle {
  font-size: 14px;
  color: #5c5c5c;
  font-weight: 400;
}
.left-bar {
  position: relative;
  box-sizing: border-box;
  width: 222px;
  border-right: 2px solid #e1e1e2;
  height: 89vh;
  background-color: #f5f5f7;
  padding: 10px 0 0 10px;
  .recommend {
    .title {
      .titled();
    }
    .recommend-list {
      .liststyle();
      li {
        .margined();
      }
      li:last-child {
        .mar-20();
      }
    }
  }
  .my-music {
    .title {
      .titled();
    }
    .my-music-list {
      .liststyle();
      li {
        .margined();
      }
      li:last-child {
        .mar-20();
      }
    }
  }
}

.setup-music-list {
  .el-collapse-item__header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #f5f5f7;
    color: #7d7d7d;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    outline: 0;
    border: none;
  }
  .el-collapse-item__wrap {
    background-color: #f5f5f7;
  }
}

</style>
