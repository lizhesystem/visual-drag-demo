<template>
  <div class="components-libs-wrapper">
    <!--<header>组件库</header>-->
    <el-scrollbar>
      <ul class="libs-wrapper">
        <li v-for="(item,index) in componentsList" :key="index">
          <div class="libs-wrapper-title">
            <p>{{ item.title }}</p>
          </div>
          <div class="components-lib-item"
               v-for="(element,i) in item.components"
               draggable
               :id="element.elName"
               :ref="element.elName"
               :key="i"
               @dragover.prevent
               @click="handleClicks(element)"
               @dragend="dragend"
               @dragstart="(e)=>{ return dragstart(e,element)}">
            <div class="lib-item-icon">
              <i :class="[element.icon]"/>
            </div>
            <p class="lib-item-title">{{ element.title }}</p>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
import {componentsList} from '@/views/DragPage/plugins/utils/ele-config'

export default {
  name: 'componentsList',
  data() {
    return {
      componentsList: componentsList,
    }
  },
  methods: {
    dragstart(e, element) {
      this.$store.commit('setMiddlePlaceholder', true)
      // // 拖开启设置容器提示框为显示状态
      // this.setMiddlePlaceholder(true)
      e.dataTransfer.setData('text', JSON.stringify(element))
      // // 指定拖放操作所允许的一个效果
      e.dataTransfer.effectAllowed = 'copyMove'
    },
    dragend() {
      this.$store.commit('setMiddlePlaceholder', false)
    },
    handleClicks() {

    },
  },
}
</script>

<style scoped lang="scss">
.components-libs-wrapper {
  user-select: none;

  ul {

  }

  .components-lib-item {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    color: #fff;
    text-align: center;
    background: #a6559d;
    width: 80px;
    padding: 6px 0;
    margin: 5px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    transition: All 0.3s ease-in-out;

    &:hover {
      border: 1px solid #eee;
    }
  }
}
</style>
