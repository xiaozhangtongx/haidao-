<!--
 * @Description: 系统首页
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-31 22:24:09
-->
<template>
  <div class="home">
    <Map />
  </div>
</template>

<script>
import Map from '@/views/Map'
export default {
  name: 'Home',
  components: {
    Map,
  },
}
</script>
