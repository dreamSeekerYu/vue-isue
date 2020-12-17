<template>
<div>
  <el-row>
    <el-col :span="12">
      <div class="editorArea">
        <el-form :label-position="'right'" label-width="90px" :model="formLabelAlign">
          <el-form-item label="方向：">
            <el-radio-group v-model="formLabelAlign.direction" size="mini">
              <el-radio-button :label="1">上</el-radio-button>
              <el-radio-button :label="2">下</el-radio-button>
              <el-radio-button :label="3">左</el-radio-button>
              <el-radio-button :label="4">右</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宽度：">
            <el-slider v-model="formLabelAlign.width"></el-slider>
          </el-form-item>
          <el-form-item label="高度：">
            <el-slider v-model="formLabelAlign.height"></el-slider>
          </el-form-item>
          <el-form-item label="旋转角度：">
            <el-slider v-model="formLabelAlign.rorate" :max="360"></el-slider>
          </el-form-item>
          <el-form-item label="背 景 色：">
            <el-color-picker v-model="formLabelAlign.color" size="mini"></el-color-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="previewArea">
        <div class="preview" :style="style"></div>
      </div>
    </el-col>
  </el-row>
  <h4>CSS代码：
    <p></p>

  </h4>
  <el-row>
    <el-col :span="24">
      <div class="lazyCssArea">

        <pre>
        {{style}}

        使用伪类元素时候添加 position: absolute; content: '';
        去掉 display: inline-block;
        父元素添加 position: relative;

        </pre>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import {
  reactive,
  toRefs,
  ref
} from 'vue'

const getBorderWidthAndColor = (direction, w, h, color) => {
  const borderWidthAndColor = {
    1: {
      borderWidth: `0 ${w /2}px ${h}px ${w / 2}px`,
      borderColor: `transparent transparent ${color} transparent`,
    },
    2: {
      borderWidth: `${h}px ${w / 2}px 0 ${w / 2}px`,
      borderColor: `${color} transparent transparent transparent`,
    },
    3: {
      borderWidth: `${h / 2}px ${w}px ${h / 2}px 0`,
      borderColor: `transparent ${color} transparent transparent`,
    },
    4: {
      borderWidth: `${h / 2}px 0 ${h / 2}px ${w}px`,
      borderColor: `transparent transparent transparent ${color}`,
    },
  };
  return borderWidthAndColor[direction];
};

export default {
  setup() {
    const data = reactive({
      formLabelAlign: {
        direction: 1,
        width: 20,
        height: 20,
        rorate: 0,
        color: '#E63131',
      }
    })
    return {
      ...toRefs(data)
    }
  },
  computed: {
    style() {
      const {
        direction,
        width,
        height,
        rorate,
        color
      } = this.formLabelAlign
      const style = getBorderWidthAndColor(direction, width, height, color)

      const styleStr = `display: inline-block;
          width:0;
          height:0;
          border-style: solid;
          transform: rotate(${this.formLabelAlign.rorate}deg);
          border-width: ${style.borderWidth};
          border-color:  ${style.borderColor}`
      return styleStr
    }
  }
};
</script>

<style lang="scss" scoped>
.editorArea {
  width: 360px;
  height: 360px;
  background: #ffffff;
}

.previewArea {
  display: inline-block;
  width: 360px;
  height: 360px;
  background: #eee;
  background-image: linear-gradient(45deg,
      rgba(0, 0, 0, 0.2) 25%,
      transparent 0,
      transparent 75%,
      rgba(0, 0, 0, 0.2) 0),
    linear-gradient(45deg,
      rgba(0, 0, 0, 0.2) 25%,
      transparent 0,
      transparent 75%,
      rgba(0, 0, 0, 0.2) 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview {}

.lazyCssArea {
  background: #ffffff;
  width: 100%;
  height: 300px;
}

pre {
  padding: 15px;
  text-align: left;
  line-height: 25px;
}
</style><style lang="scss">
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}


.el-col {
  border-radius: 4px;
}
</style>
