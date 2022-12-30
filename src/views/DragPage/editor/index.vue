<template>
  <div class="editor-pane">
    <div class="editor-pane-inner">
      <div class="editorMain_content" :style="{width: projectData.width + 'px'}">
        <!--页面外层的盒子，也是页面画板的入口-->
        <div class="page-preview-wrapper">
          <!--画板-->
          <div class="editor-wrapper"
               ref="editorWrapper"
               @dragover.prevent
               @dragenter="dragenter"
               @dragleave="dragleave"
               @dragover="dragovers"
               @drop="drops">
            <div class="editor-wrapper-container" v-if="projectData.elements.length">
              <draggable
                :list="projectData.elements"
                :animation="300"
                group="compGroup"
              >
                <p-container
                  v-for="(item, index) in projectData.elements"
                  :key="item.uuid"
                  :data-container-index="index"
                  :common-style="item.commonStyle"
                  :container-item="item">
                  <child-node-component
                    v-for="childItem in item.elChild"
                    :key="childItem.uuid"
                    :common-style="childItem.commonStyle"
                    :child-item="childItem"/>
                </p-container>
              </draggable>

              <!--在每个容器（pl-container）里面的顶部也有一个这样的节点-->
              <!--画板列表底部需要放个“提示框”索引值就是数组的length，因为需要在最后一个节点底部放上节点-->
              <div class="g_middlePlaceholder"
                   :data-container-index="projectData.elements.length"
                   v-show="middlePlaceholder">放在这里
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
import PContainer from "@/views/DragPage/plugins/library/container";
import {mapState} from "vuex";
import ChildNodeComponent from "@/views/DragPage/plugins/library/components/childNodeComponent";
import {drawingComponent} from "@/views/DragPage/plugins/utils/ele-config";
import {Message} from "element-ui";

export default {
  name: "editor",
  components: {ChildNodeComponent, PContainer, draggable},
  data() {
    return {}
  },
  computed: {
    ...mapState(['projectData', 'middlePlaceholder'])
  },
  methods: {
    drops(e) {
      e.preventDefault()
      e.stopPropagation()
      const data = e.dataTransfer.getData('text');
      e.dataTransfer.clearData()

      const dragDom = JSON.parse(data)
      if (!dragDom || !dragDom.elName) return
      // 1：空模块
      if (this.projectData.elements.length === 0) {
        this.$store.commit('addElementToDestination', {
          index: 0, // 模板无节点的时候就直接索引0
          nodeData: dragDom
        })
        // 2：结果是“放在这里”
      } else if (e.target.classList.contains('g_middlePlaceholder')) {
        this.$store.commit('addElementToDestination', {
          index: e.target.dataset['containerIndex'],
          nodeData: dragDom
        })
        // 3：放到容器上
      } else if (e.target.classList.contains('allowed')) {
        console.log(drawingComponent)
        if (drawingComponent.includes(dragDom.elName)) {
          dragDom.commonStyle.top = e.layerY
          dragDom.commonStyle.left = e.layerX
          this.$store.commit('addDropContainer', {
            index: e.target.dataset['containerIndex'],
            nodeData: dragDom
          })
        } else {
          Message.error({message: '该模块不可以添加在容器中', type: 'warning', duration: 2000})
        }
      }
    },
    dragenter(event) {
      if (event.target.classList.contains('g_middlePlaceholder')) {
        event.target.classList.add('gm_active')
      }
    },
    dragleave(event) {
      if (event.target.classList.contains('g_middlePlaceholder')) {
        event.target.classList.remove('gm_active')
      }
    },
    dragovers(event) {
      if (event.target.classList.contains('allowed') || event.target.classList.contains('g_middlePlaceholder')) {
        event.dataTransfer.dropEffect = 'move'
      } else {
        event.dataTransfer.dropEffect = 'copy'
      }
      event.preventDefault()
    }

  },
}
</script>

<style scoped lang="scss">
.editor-wrapper {
  overflow: auto;
  min-height: 500px;
  height: 100%;
  width: 1200px;
  background-color: #f1f2f6;

  .g_middlePlaceholder {
    background: #f0f0f0;
    color: #f0f0f0;
    border: 1px solid #eef0fc;
    height: 55px;
    line-height: 55px;
    text-align: center;
  }

  // 获取焦点的样式
  .g_middlePlaceholder.gm_active {
    border: 1px dashed #1ab399;
    color: #1ab399;
    background-color: rgba(65, 196, 181, 0.1);
  }
}
</style>
