<!--属性-->
<template>
  <div class="attr-panel" ref="attrPanel" :style="{top:attrPanelStyle.top,left:attrPanelStyle.left}">
    <el-card class="box-card">
      <div slot="header" class="attr-header" @mousedown="mouseDownOnBar">
        <span>操作栏</span>
        <i @click="$store.commit('hideToolsBar')" class="el-icon-close"></i>
      </div>
      <!--组件库-->
      <components-list>
      </components-list>
      <!--属性面板-->
      <div>
        当前Attr模块：{{ curAttrPanelType }}
      </div>
    </el-card>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import ComponentsList from '@/views/DragPage/attr-panel/components-list.vue'

export default {
  name: 'attrPanel',
  components: { ComponentsList },
  data() {
    return {
      attrPanelStyle: {
        top: 100,
        left: 80,
      },
    }
  },
  computed: {
    ...mapState(['showToolsBar', 'curAttrPanelType']),
  },
  methods: {
    mouseDownOnBar(e) {
      e.stopPropagation()
      e.preventDefault()
      //算出鼠标相对元素的位置
      const disX = e.clientX - this.$refs.attrPanel.offsetLeft
      const disY = e.clientY - this.$refs.attrPanel.offsetTop
      let left, top = ''
      const move = (moveEvent) => {
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        left = moveEvent.clientX - disX
        top = moveEvent.clientY - disY
        this.attrPanelStyle.top = top + 'px'
        this.attrPanelStyle.left = left + 'px'
      }

      const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
  },
}
</script>

<style scoped lang="scss">
.attr-panel {
  position: absolute;
  z-index: 999;

  .box-card {
    width: 400px;

    ::v-deep {
      .el-card__header {
        padding: 10px;
      }
    }
  }

  .attr-header {
    cursor: move;
    height: 30px;
    display: flex;
    align-items: center;

    > i {
      margin-left: auto;
      cursor: auto;
    }
  }
}

</style>
