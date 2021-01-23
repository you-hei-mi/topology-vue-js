<template>
  <div class="preview">
    <topology preview="true" :data="data" />
    <div class="tools" v-if="showTools">
      <a-button type="primary" @click="onBack">
        <a-icon type="left" /> 返回
      </a-button>
      <div></div>
      <a-button type="primary" style="margin-right: 0" @click="onSizeWindow">
        <a-icon type="border" />
        适合窗口大小
      </a-button>
      <a-button type="primary" @click="onSizeOri">
        <a-icon type="fullscreen-exit" />
        实际大小
      </a-button>
    </div>
  </div>
</template>

<script>
import Topology from 'topology-vue';



export default {
  name: 'Preview',
  components: {
    Topology
  },
  data() {
    return {
      data: { data: {} },
      locked: 0,
      showTools: true
    };
  },
  created() {
    window.aaaa = '这是一个a'
    const data = window.topologyData;
    if (data) {
      this.locked = data.locked;
      data.locked = 1;
      this.$set(this.data, 'data', Object.assign({}, data));
      setTimeout(() => {
        window.topologyData = null;
      }, 200);
    } else {
      // Do sth.
    }

    let that = this;
    window.bbb = function(a,b){
      console.log('这是一个方法')
      console.log('这是参数'+a)
      console.log('这是参数'+b)
      that.onSizeWindow();
    }


    this.showTools = !!this.$route.query.r;
  },
  methods: {
    onSizeWindow() {
      window.topology.fitView(16);
    },

    onSizeOri() {
      window.topology.open(this.data.data);
    },

    onBack() {
      window.topology.data.locked = this.locked;
      window.topologyData = window.topology.data;
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.preview {
  position: relative;
  height: 100vh;

  .tools {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    & > div {
      flex-grow: 1;
    }

    button {
      margin: 12px 16px;
    }
  }
}
</style>
