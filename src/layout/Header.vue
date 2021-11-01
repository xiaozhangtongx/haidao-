<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-11-01 19:46:46
-->
<template>
  <div class="header">
    <a-row type="flex" justify="space-between" style="height:9vh">
      <a-col :span="8">
        <div class="logo">
          <img src="../assets/logo.png" alt="">
          <li><strong> 基于ECharts的海盗数据分析系统</strong></li>
        </div>
      </a-col>
      <a-col :span="8" class="nav">
        <li>
          <a-select default-value="请选择地区" style="weight:260px">
            <a-select-option value="jack">
              全球各地
            </a-select-option>
            <a-select-option value="xxxx">
              xxxx
            </a-select-option>
            <a-select-option value="xxxx">
              xxxx
            </a-select-option>
          </a-select>
        </li>
        <li>
          <a-range-picker @change="onChange" style="weight:20px" />
        </li>
        <li>
          <a-button type="primary" icon="question">
            帮助
          </a-button>
        </li>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
  },
}
</script>

<style scoped lang='less'>
.header {
  height: 9vh;
  width: 100%;
  .logo {
    display: flex;
    img {
      height: 9vh;
    }
    li {
      color: #fff;
      font-size: 28px;
      height: 9vh;
    }
  }
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      // width: 100%;
      margin-right: 10px;
      text-align: center;
      height: 5vh;
      line-height: 5vh;
    }
  }
}
</style>