<!--
 * @Description: 基本布局
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-31 22:28:57
-->
<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <Header />
      </a-layout-header>
      <a-layout-content class="main">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Header from '@/layout/Header'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Header,
  },
}
</script>

<style scoped lang='less'>
.header {
  height: 9vh;
}
.main {
  height: 91vh;
}
.ant-layout-header {
  padding: 0;
  background: #1d374c;
}
</style>