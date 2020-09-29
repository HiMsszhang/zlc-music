<template>
  <div class="detail">
    <div class="detail-b">
      <div class="detail-img">
        <img :src="reDetail.coverImgUrl" alt="" width="200px" height="200px" />
      </div>
      <div class="detail-text">
        <h2>{{ reDetail.name }}</h2>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in reDetail.tracks" :key="item.id">
          0{{ index + 1 }}{{ item.name }}
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { request } from "../assets/network/request";
export default {
  props: ["playlist", "index"],
  data() {
    return {
      reDetail: "",
    };
  },
  mounted() {

  },
  methods: {},
  computed: {

  },
  created() {
    request({
      url: "/playlist/detail",
      params: {
        id: this.$route.params.id,
      },
    }).then((res) => {
      console.log(res);
      this.reDetail = res.data.playlist;
      console.log(this.reDetail);
       for (let i = 0; i < this.reDetail.trackIds.lenth; i++) {
        console.log(this.reDetail.trackIds);
        request({
      url: "/song/url",
      params: {
        id: this.reDetail.trackIds[i],
      },
    }).then((res)=>{
      console.log(res);
    })
      }
    });
  },
};
</script>

<style lang="less">
.detail {
  width: 100%;
  height: 100%;
}
.detail-b {
  display: flex;
  justify-content: space-between;
  padding: 25px;
}
</style>

