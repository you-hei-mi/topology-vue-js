<template>
  <div class="page-list">
    <div>
      <div class="nav">
        <label>热门图文</label>
      </div>
      <div class="flex wrap">
        <div
          class="topo"
          v-for="(item, index) of data.list"
          :key="index"
          :title="item.desc"
          @click="onOpen(item)"
        >
          <div class="image">
            <img :src="item.image" />
          </div>
          <div class="ph15 pv10">
            <div class="title line one" :title="item.name">{{ item.name }}</div>
            <div class="desc line two mt5" :title="item.desc">{{ item.desc }}</div>
            <div class="flex mt5">
              <div class="full flex middle">
                <el-avatar
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :size="24"
                ></el-avatar>
                <span class="ml5">{{ item.username }}</span>
              </div>
              <div>
                <span class="hover pointer mr15" title="赞">
                  <i
                    class="iconfont"
                    :class="{'iconfont icon-appreciate':!item.stared, 'iconfont icon-appreciatefill':item.stared}"
                  ></i>
                  <span class="ml5">{{ item.star || 0 }}</span>
                </span>
                <span class="hover pointer" title="收藏">
                  <i
                    class="iconfont"
                    :class="{'iconfont icon-like':!item.favorited, 'iconfont icon-likefill':item.favorited}"
                  ></i>
                  <span class="ml5">{{ item.hot || 0 }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-pagination
          @current-change="getList"
          :current-page="search.pageIndex"
          :page-size="8"
          layout=" prev, pager, next, jumper, total"
          :total="data.count"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        list: [],
        count: 0
      },
      search: {
        pageIndex: 1,
        pageCount: 8
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      let src = {"count":228,"list":[{"id":"5df3a2646025d729abf23681","name":"电网（mqtt）","desc":"电网","data":null,"image":"/image/topology/thumb_63a69ecb9ac00571.png","class":"架构拓扑图","component":false,"userId":"5d1b1e566025d743211b34e0","username":"Alsmile","editorId":"5d1b1e566025d743211b34e0","editorName":"Alsmile","shared":true,"star":1,"view":20088,"recommend":1231,"tags":[],"createdAt":"2019-12-13T14:38:28.315Z","updatedAt":"2021-01-19T02:44:46.13Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5fe18bc0eb4de900019d7a17","name":"水流视图","desc":"","data":null,"image":"/image/topology/thumb_d02ea0e073f95e3d.png","class":"水利","component":false,"userId":"5fd9702bcd9a3a063fa10e04","username":"17671719576","editorId":"5fd9702bcd9a3a063fa10e04","editorName":"17671719576","shared":true,"star":1,"view":1410,"recommend":1000,"tags":[],"createdAt":"2020-12-22T06:01:36.158Z","updatedAt":"2021-01-11T08:26:42.886Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5fe1b58deb4de900019d7a22","name":"阀泵","desc":"","data":null,"image":"/image/topology/thumb_b55dfacb0ac6baed.png","class":"水利","component":false,"userId":"5fd9702bcd9a3a063fa10e04","username":"17671719576","editorId":"5fd9702bcd9a3a063fa10e04","editorName":"17671719576","shared":true,"star":1,"view":756,"recommend":999,"tags":[],"createdAt":"2020-12-22T08:59:57.314Z","updatedAt":"2021-01-11T08:26:50.257Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5ffd1f3f332a920001dfd592","name":"城市数据可视化","desc":"","data":null,"image":"/image/topology/thumb_a9b34877e63f9d13.png","class":"物联网","component":false,"userId":"5fe40c1ccd9a3a0b4030d7ae","username":"å¡å¡","editorId":"5fe40c1ccd9a3a0b4030d7ae","editorName":"å¡å¡","shared":true,"star":1,"view":367,"recommend":999,"tags":[],"createdAt":"2021-01-12T04:02:07.546Z","updatedAt":"2021-01-12T06:11:33.24Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"600550e15762010001460109","name":"办公空间","desc":"","data":null,"image":"/image/topology/thumb_0dff280f687cf24b.png","class":"物联网","component":false,"userId":"5fe40c1ccd9a3a0b4030d7ae","username":"凡凡","editorId":"5fe40c1ccd9a3a0b4030d7ae","editorName":"凡凡","shared":true,"star":0,"view":67,"recommend":999,"tags":[],"createdAt":"2021-01-18T09:12:01.13Z","updatedAt":"2021-01-19T09:13:35.851Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5ffbbc4f332a920001dfd530","name":"请假流程图","desc":"","data":null,"image":"/image/topology/thumb_12087f679de3fc0d.png","class":"架构拓扑图","component":false,"userId":"5fd9702bcd9a3a063fa10e04","username":"17671719576","editorId":"5fd9702bcd9a3a063fa10e04","editorName":"17671719576","shared":true,"star":0,"view":193,"recommend":231,"tags":[],"createdAt":"2021-01-11T02:47:43.254Z","updatedAt":"2021-01-12T06:42:16.514Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5ffbc68b332a920001dfd53f","name":"表格总览","desc":"","data":null,"image":"/image/topology/thumb_95fbafc5565c021e.png","class":"架构拓扑图","component":false,"userId":"5fd9702bcd9a3a063fa10e04","username":"17671719576","editorId":"5fd9702bcd9a3a063fa10e04","editorName":"17671719576","shared":true,"star":0,"view":127,"recommend":231,"tags":[],"createdAt":"2021-01-11T03:31:23.005Z","updatedAt":"2021-01-12T06:32:04.45Z","deletedAt":"0001-01-01T00:00:00Z"},{"id":"5ffbcaaf332a920001dfd543","name":"节点统计","desc":"","data":null,"image":"/image/topology/thumb_e677cf59c3934fff.png","class":"架构拓扑图","component":false,"userId":"5fd9702bcd9a3a063fa10e04","username":"17671719576","editorId":"5fd9702bcd9a3a063fa10e04","editorName":"17671719576","shared":true,"star":0,"view":106,"recommend":231,"tags":[],"createdAt":"2021-01-11T03:49:03.441Z","updatedAt":"2021-01-12T06:30:47.88Z","deletedAt":"0001-01-01T00:00:00Z"}]};
      this.data = src;
      // this.data = await this.$axios.$get(
      //   `/api/topologies?pageIndex=${this.search.pageIndex}&pageCount=${this.search.pageCount}`
      // )
    },
    onOpen(item) {
      this.$router.push({ path: '/workspace', query: { id: item.id } })
    }
  }
}
</script>

<style lang="scss">
.page-list {
  background-color: #e7e7e7;
  width: 100vw;
  height: 100%;
  padding: 0 0.3rem;
  overflow: auto;

  .nav {
    margin: 0.2rem 0.1rem 0.05rem 0.1rem;
  }

  & > div {
    max-width: 12rem;
    margin: auto;
  }
}

.topo {
  position: relative;
  width: calc(25% - 0.2rem);
  height: 3rem;
  margin: 0.1rem;
  border-radius: 2px;
  background-color: #fff;

  .image {
    padding: 0.1rem 0.1rem 0.15rem 0.1rem;
    text-align: center;
    height: 1.85rem;
    border-bottom: 1px solid #f7f7f7;
    cursor: pointer;

    img {
      height: 100%;
      max-width: 100%;
    }
  }

  .title {
    font-size: 0.16rem;
    line-height: 0.24rem;
    height: 0.24rem;
    cursor: pointer;
  }

  .desc {
    font-size: 0.12rem;
    line-height: 0.16rem;
    height: 0.32rem;
  }

  .iconfont {
    font-size: 0.16rem;
  }

  textarea {
    &.input {
      min-width: 0.3rem;
      width: 100%;
      max-width: 100%;
      font-size: 0.1rem;
      padding: 0.02rem 0.05rem;
      resize: none;
    }
  }

  .icon-delete {
    position: absolute;
    top: 0.05rem;
    right: 0.1rem;
  }
}
</style>
