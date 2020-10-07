<template>
  <div class="play-music">
    <div class="now-play">
      <div class="song-img">
        <img src="" />
      </div>
      <div class="song">
        <div class="song-name">
          <span>白玫瑰</span>
          <span class="brief">(啊八八八sd sa sd as八八八)</span>
        </div>
        <p>陈奕迅</p>
      </div>
      <div class="button">
        <p class="el-icon-star-on"></p>
        <p class="el-icon-delete"></p>
      </div>
    </div>
    <div class="player">
      <a @click="shangyiqu">
        <img src="../assets/image/yduishangyiqu.svg" alt />
      </a>
      <a @click="toggle()">
        <img
          @click="changeState"
          v-show="isstop"
          src="../assets/image/bofang.svg"
          width="40px"
          height="40px"
          alt
        />
        <img
          @click="changeState"
          v-show="isshow"
          src="../assets/image/zanting.svg"
          width="40px"
          height="40px"
          alt
        />
      </a>
      <a>
        <img src="../assets/image/yduixiayiqu.svg" alt />
      </a>
    </div>

    <div class="progress">
      <div class="play-line">
        <span>{{currentTime}}</span>
        <div class="block">
          <el-slider
            ref="slider"
            @change="changeVal(sliderVal)"
            :show-tooltip="false"
            v-model="sliderVal"
          ></el-slider>
        </div>
        <span>{{duration}}</span>
      </div>
      <div class="voice-line">
        <div class="change-voice">
          <img src="../assets/image/shengyin.svg" width="15px" height="15px" alt />
        </div>
        <div class="block-voice">
          <el-slider
            ref="vSlider"
            @change="changVolume(VsliderVal)"
            :show-tooltip="false"
            v-model="VsliderVal"
          ></el-slider>
        </div>
      </div>
    </div>
    <audio
      :src="`https://music.163.com/song/media/outer/url?id=${this.songsId}.mp3`"
      ref="audio"
      @timeupdate="audioTimeUpdate()"
    ></audio>

    <div class="tools"></div>
  </div>
</template>

<script>
import { formatDate } from "../assets/common/tool";
import { request } from "../assets/network/request";
export default {
  data() {
    return {
      isshow: false,
      isstop: true,
      isplay: false,
      sliderVal: 0,
      VsliderVal: 10,
      musicIndex: 0,
      playList: [],
      currentTime: "00:00",
      duration: "0:00",
      songsId: 0,
      currentIndex: 0,
    };
  },
  components: {},
  computed: {

  },
  created() {
    request({
      url: "/artist/top/song",
      params: {
        id: 6452,
      },
    }).then((res) => {
      // console.log(res);
      this.playList = res.data.songs;
      // console.log(this.playList)
      this.songsId = res.data.songs[this.currentIndex].id;
      // console.log(this.currentIndex);
      //  console.log(this.songsId);
      return this.songsId
    });
    request({
      url:"/song/url",
      params:{
        id:this.songsId
      }
      }).then((res)=>{
        // console.log(res)
    })
  },
  mounted() {},
  methods: {
    changeState() {
      if (this.isstop) {
        this.isstop = !this.isstop;
        this.isshow = !this.isshow;
      } else {
        this.isstop = !this.isstop;
        this.isshow = !this.isshow;
      }
    },

    toggle() {
      this.isPlay = !this.isPlay;
      if (this.isPlay && this.$refs.audio.readyState == 4) {
        this.$refs.audio.volume = this.VsliderVal / 100;
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },

    audioTimeUpdate() {
      this.sliderVal =
        (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100;
      if (this.$refs.audio != null) {
        this.currentTime = formatDate(
          new Date(this.$refs.audio.currentTime * 1000),
          "mm:ss"
        );
        this.duration = formatDate(
          new Date(this.$refs.audio.duration * 1000),
          "mm:ss"
        );
      }
    },

    changeVal(val) {
      this.$refs.audio.currentTime = this.$refs.audio.duration * (val / 100);
      // console.log(this.$refs.audio.currentTime);
    },
    changVolume(VsliderVal) {
      this.$refs.audio.volume = this.VsliderVal / 100;
    },
    shangyiqu() {
      if (this.currentIndex == 0) {
        this.currentIndex = 49;
      } else {
        this.currentIndex--;
      }
      console.log(this.currentIndex);
    },
  },
};
</script>

<style lang="less">
.play-music {
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-top: 2px solid #e1e1e2;
  align-items: center;
  background-color: #f5f5f7;
  box-sizing: border-box;
  position: relative;
}
.now-play {
  position: absolute;
  top: -100%;
  left: 0;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 1px;
  height: 60px;
  border-top: 2px solid #e1e1e2;
  right: 0px;
  padding: 4px 5px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .song-img {
    width: 45px;
    height: 45px;
    border: 1px solid #e1e1e2;
    cursor: pointer;
  }
  .song {
    padding: 5px;
    cursor: pointer;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;

    .brief {
      color: #7d7d7d;
      text-overflow: ellipsis;
    }
  }
  width: 222px;
}
.now-play .button {
  display: flex;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;
}
.now-play .button p:last-child {
  margin-top: 10px;
}
.play-music .player {
  width: 330px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.play-music .progress {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .play-line {
    .block {
      width: 100%;
      margin: 0 20px;
    }
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    .el-slider__runway {
      .el-slider__bar {
        background-color: #c62f2f;
      }
      .el-slider__button {
        border: 2px solid #e1e1e2;
        position: relative;
      }
      .el-slider__button::before {
        content: "";
        width: 4px;
        height: 4px;
        position: absolute;
        background-color: #c62f2f;
        border-radius: 2px;
        top: 6px;
        right: 6px;
      }
    }
  }
}
.play-music .progress .voice-line {
  width: 150px;
  height: 100%;
  display: flex;
  padding: 0 10px;
  align-items: center;
  .block-voice {
    width: 80px;
    margin-left: 20px;
  }
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
  .el-slider__runway {
    .el-slider__bar {
      background-color: #c62f2f;
      border-radius: 4px;
    }
    .el-slider__button {
      border: 2px solid #e1e1e2;
      position: relative;
    }
    .el-slider__button::before {
      content: "";
      width: 4px;
      height: 4px;
      position: absolute;
      background-color: #c62f2f;
      border-radius: 2px;
      top: 6px;
      right: 6px;
    }
  }
}
.play-music .tools {
  width: 300px;
  height: 100%;
}
</style>
