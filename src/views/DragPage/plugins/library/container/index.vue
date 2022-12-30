<!--自由容器-->
<template>
  <section
    class="p-container"
    :style="convertCommonStyle(containerItem.containerStyle)"
    :data-uuid="containerItem.uuid">
    <!--每个容器里面的顶部需要一个放在这里，索引盒子就是它节点的索引-->
    <div class="g_middlePlaceholder"
         :data-container-index="containerIndex"
         v-show="middlePlaceholder">放在这里
    </div>
    <!--可拖动的容器层-->
    <div class="module-component-wrapper"
         :ref="'container' + containerIndex">

      <div class="module_editor"
           v-show="middlePlaceholder"
           :data-container-index="containerIndex"
           :class="{ allowed: containerItem.allowed }"/>
      <!--容器组件画板层-->
      <div class="module_bgContent_wrapper" :style="convertCommonStyle(containerItem.commonStyle)">
        <!--空数据布局-->
        <div v-if="containerItem.elChild.length === 0" class="emptyModule">
          <div class="emptyModuleText">自由容器可添加文本、图片、按钮模块</div>
        </div>
        <!--存在节点时，渲染组件-->
        <div class="packModulesContainer" v-else>
          <slot/>
        </div>
        <!--拖动容器盒子的小圆点-->
        <!--<div class="edit-shape-point"-->
        <!--     v-for="item in (containerItem.uuid === activeElementUUID ? containerItem.pointList || [] : [])"-->
        <!--     :key="item"-->
        <!--     @mousedown="handleMouseDownOnPoint(item)"-->
        <!--     :style="getPointStyle(item)"/>-->
      </div>
    </div>
  </section>
</template>

<script>
import {getCommonStyle} from "@/views/DragPage/plugins/utils/util";
import {mapMutations, mapState} from "vuex";

export default {
  name: "p-container",
  props: {
    // 当前元素索引
    containerIndex: {
      require: true,
      type: Number,
      default: 0
    },
    // 元素属性
    containerItem: {
      type: Object, default: () => {
        return {}
      }
    },
    commonStyle: {
      require: true, type: Object, default: () => {
        return {}
      }
    },
  },
  computed: {
    ...mapState(['activeElementUUID', 'middlePlaceholder', 'hoverChildUUID', 'parentContainerInfo']),
    ...mapMutations([
      'setActiveElementUUID',
      'setContainerIndex'
    ]),

  },
  methods: {
    // 获取节点样式
    convertCommonStyle(data) {
      return getCommonStyle(data)
    },
  },
}
</script>

<style scoped lang="scss">
.p-container {
  box-sizing: border-box;

  &:hover {
    border: 1px dashed #1ab399;
  }

  .module-component-wrapper {
    width: 100%;
    position: relative;

    &:before {
      content: "";
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      position: absolute;
      top: 0;
      left: 0;
      border: 1px dashed #1ab399;
      z-index: 2;
      display: none;
      pointer-events: none; // 非常重要 https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events
    }
  }

  .g_middlePlaceholder {
    background: #f0f0f0;
    color: #f0f0f0;
    border: 1px solid #eef0fc;
    height: 55px;
    line-height: 55px;
    text-align: center;
  }

  .g_middlePlaceholder.gm_active {
    border: 1px dashed #1ab399;
    color: #1ab399;
    background-color: rgba(65, 196, 181, 0.1);
  }
}

.module_editor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
