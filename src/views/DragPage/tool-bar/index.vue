<template>
  <div
    class="tool-bar"
    ref="toolBar"
    :style="{top:barStyle.top,left:barStyle.left}"
    @mousedown="mouseDownOnBar">
    <ul>
      <li>
        <i class="el-icon-menu" title="模块"></i>
      </li>
      <li>
        <i class="el-icon-s-open" title="样式"></i>
      </li>
      <li>
        <i class="el-icon-s-tools" title="设置"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "toolBar",
  data() {
    return {
      barStyle: {
        top: 100,
        left: 80
      }
    }
  },
  methods: {
    mouseDownOnBar(e) {
      e.stopPropagation()
      e.preventDefault() // Let's stop this event.
      //算出鼠标相对元素的位置
      const disX = e.clientX - this.$refs.toolBar.offsetLeft;
      const disY = e.clientY - this.$refs.toolBar.offsetTop;
      let left = '';
      let top = '';

      const move = (moveEvent) => {
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        left = moveEvent.clientX - disX;
        top = moveEvent.clientY - disY;
        this.barStyle.top = top + 'px'
        this.barStyle.left = left + 'px'
      }

      const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }
  },
}
</script>

<style scoped lang="scss">
.tool-bar {
  position: absolute;
  z-index: 999;
  //top: 100px;
  //left: 80px;
  cursor: move;

  > ul {
    li {
      height: 54px;
      width: 54px;
      border-radius: 54px;
      overflow: hidden;
      margin-bottom: 15px;
      background: #fafafa;
      line-height: 0;
      cursor: pointer;
      box-shadow: 2px 3px 7px 0 rgb(0 0 0 / 20%);
      transition: background-color, width .2s;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: #57606f;
        font-size: 28px;
      }
    }
  }
}
</style>
