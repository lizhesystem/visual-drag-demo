<!--PC首页-->
<template>
  <div class="p-content">
    <!--顶部导航-->
    <header-bar/>
    <section>
      <!--工具-->
      <tool-bar></tool-bar>
      <!--画板-->
      <editor></editor>
    </section>
  </div>
</template>

<script>
import HeaderBar from "@/views/DragPage/header/header-bar";
import Editor from "@/views/DragPage/editor";
import ToolBar from "@/views/DragPage/tool-bar";

export default {
  name: "DragPage",
  components: {ToolBar, Editor, HeaderBar}
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
