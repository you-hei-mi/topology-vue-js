<template>
  <div class="home">
    <!-- 使用topology组件 -->
    <topology />
  </div>
</template>

<script>
// 导入topology-vue组件
import topology from "topology-vue";
// 需要导入topology-vue.css
import "topology-vue/topology-vue.css";

export default {
  name: "Home",
  components: {
    topology,
  },
};
</script>
<style lang="scss">
.home {
  height: 100vh;
}
</style>
