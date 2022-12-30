<template>
  <div class="commonModule">
    <component
      :is="childItem.elName"
      :style=filterCommonStyle(childItem.commonStyle)
      v-model="childItem.value"
      v-bind="{ childItem: childItem }"
    >
    </component>
  </div>
</template>

<script>
import {deepClone, getCommonStyle} from "@/views/DragPage/plugins/utils/util";

export default {
  name: "childNodeComponent",
  props: {
    childItem: {
      type: Object,
      default: () => {}
    },
    commonStyle: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 过滤组件样式
    filterCommonStyle (style, type) {
      const objD = ['position', 'left', 'top', 'zIndex']
      const commonModuleStyle = {}
      const cs = deepClone(getCommonStyle(style))
      objD.forEach(item => {
        for (let i in cs) if (item === i) commonModuleStyle[item] = cs[i]
        delete cs[item]
      })
      // 如果是组件外层，就只需要objD数组里面的样式
      if (type === 'commonModule') {
        return commonModuleStyle
      } else {
        // 其他的就是组件本身的样式
        return cs
      }
    }
  },
}
</script>

<style scoped>

</style>
