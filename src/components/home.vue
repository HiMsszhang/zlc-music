<template>
  <div class="wrapper">
    <div class="banner">
      <el-carousel :interval="5000" type="card" height="200px">
        <el-carousel-item v-for="item in banners" :key="item.id">
          <img ref="banner" :src="item.imageUrl" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="recommend">
      <h3>推荐歌单</h3>
      <hr />
      <div class="recommend-list">
        <router-link
          class="song-list"
          v-for="(item, index) in recommendList"
          :key="item.id"
          :index="index"
          :playlist="item"
          :to="'recommend/'+item.id"
        >
          <div>
            <img :src="item.picUrl" width="100%" height="100%" />
          </div>
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
<!--    <router-view name="recommendList" />-->
  </div>

</template>

<script>
import { request } from "../assets/network/request";
import recommendList from "../views/recommendList"
export default {
  data() {
    return {
      banners: "",
      recommendList: "",
    };
  },
  components:{
    recommendList,
  },
  created() {
    request({
      url: "/banner",
    }).then((res) => {
      // console.log(res);
      this.banners = res.data.banners;
      // console.log(this.banners);
    });
    request({
      url: "/personalized",
      params: {
        limit: 20,
      },
    }).then((res) => {
      // console.log(res);
      this.recommendList = res.data.result;
      // console.log(this.recommendList);
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.wrapper {
  height: 89vh;
  overflow: scroll;
  width: 1050px;
  // height: 89vh;
  margin: 0 auto;
  box-sizing: border-box;
}
.wrapper::-webkit-scrollbar {
  display: none;
}
.banner {
  width: 100%;
  margin-top: 15px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.wrapper .recommend {
  width: 100%;
  .recommend-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .song-list {
      width: 20%;
      padding: 20px 20px;
      box-sizing: border-box;
    }
  }
}
</style>


