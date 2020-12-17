<template>
<div>
  <p v-for="(item,index) in componentKeys" :key="index" @click="changeComponent(item[0])"> {{item[1]}} </p>
  <component :is="childComponent"></component>
</div>
</template>

<script>
import {
  componentKeys
} from './components'

export default {
  data() {
    return {
      childComponent: '',
      componentKeys
    }
  },
  mounted() {},
  methods: {
    changeComponent(item) {
      this.childComponent = item
    }
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
