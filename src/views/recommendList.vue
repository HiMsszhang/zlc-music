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
        <li v-for="(item, index) in list" :key="item.id">
          {{ index + 1 }}{{ item.name }}
          <div>我爱你</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { request } from "../assets/network/request";
export default {
  props: ["playlist", "index"],
  data() {
    return {
      reDetail: "",
      list: [],
    };
  },
  mounted() {

  },
  methods: {},
  computed: {

  },
  created() {
    debugger
    request({
      url: "/playlist/detail",
      params: {
        id: decodeURI(this.$route.params.id),
      },
    }).then((res) => {
      this.reDetail = res.data.playlist;
       for (let i = 0; i < this.reDetail.trackIds.length; i++) {
        // console.log(this.reDetail.trackIds);
        debugger
        request({
      url: "/song/detail",
      params: {
        ids: this.reDetail.trackIds[i].id,
      },
    }).then((res)=>{
          this.list.push(res.data.songs[0])
    })
      }
    })
  },
};
</script>

<style lang="less">
.detail {
  width: 100%;
  height: 89vh;
}
.detail-b {
  display: flex;
  justify-content: space-between;
  padding: 25px;
}
</style>

