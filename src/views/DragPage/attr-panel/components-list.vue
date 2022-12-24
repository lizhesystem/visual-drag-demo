<template>
  <div class="components-libs-wrapper">
    <header>组件库</header>
    <el-scrollbar>
      <ul class="libs-wrapper">
        <li v-for="(item,index) in componentsList" :key="index">
          <div class="components-lib-item"
               v-for="(element,i) in item.components"
               draggable="true"
               :id="element.elName"
               :ref="element.elName"
               :key="i"
               @click="handleClicks(element)"
               @dragend="dragend"
               @dragstart="dragstart(element)"
          >
            <div class="lib-item-img">
              <i :class="[element.icon]"/>
            </div>
          </div>
        </li>
      </ul>

    </el-scrollbar>
  </div>
</template>

<script>
import { componentsList } from '@/views/DragPage/plugins/utils/config'

export default {
  name: 'componentsList',
  data() {
    return {
      componentsList: componentsList,
    }
  },
  methods: {
    dragstart(ele) {
      let downEvent = event
      // 拖开启设置容器提示框为显示状态
      // this.setMiddlePlaceholder(true)
      downEvent.dataTransfer.setData('text', JSON.stringify(ele))
      // 指定拖放操作所允许的一个效果
      downEvent.dataTransfer.effectAllowed = 'copyMove'
    },
    dragend() {

    },
    handleClicks() {

    },
  },
}
</script>

<style scoped>

</style>
