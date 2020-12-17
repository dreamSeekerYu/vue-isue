<template>
<el-container>
  <el-aside width="200px">
    <!-- <p>
      <router-link to="/triangle">三角形生成器</router-link>
    </p>
    <p>
      <router-link to="/">clip-path 生成器</router-link>
    </p>
    <p>
      <router-link to="/about">About</router-link>
    </p> -->
    <p v-for="(item,index) in componentKeys" :key="index" @click="changeComponent(item[0])"> {{item[1]}} </p>
  </el-aside>
  <el-container>
    <component :is="childComponent"></component>
    <!-- <cssdoodle></cssdoodle>
    <cssgrid></cssgrid>
    <helloworld></helloworld> -->
  </el-container>
</el-container>
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
