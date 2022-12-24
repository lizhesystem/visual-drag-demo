<!--PC首页-->
<template>
  <div class="p-content">
    <!--顶部导航-->
    <header-bar/>
    <section>
      <!--工具-->
      <tool-bar
        v-show="showToolsBar"
      />
      <!--属性面板-->
      <attr-panel
        v-show="!showToolsBar"
      ></attr-panel>
      <!--画板-->
      <editor></editor>
    </section>
  </div>
</template>

<script>
import HeaderBar from '@/views/DragPage/header/header-bar'
import Editor from '@/views/DragPage/editor'
import ToolBar from '@/views/DragPage/tool-bar'
import AttrPanel from '@/views/DragPage/attr-panel/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'DragPage',
  components: {
    AttrPanel,
    ToolBar,
    Editor,
    HeaderBar,
  },
  data() {
    return {
      key: value,
    }
  },
  computed: {
    ...mapState(['showToolsBar']),
  },

}
</script>

<style scoped lang="scss">
.p-content {
  > section {
    display: flex;
    position: relative;
    justify-content: center;
  }
}

</style>
