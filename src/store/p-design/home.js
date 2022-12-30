import {deepCopy} from "@/utils/utils";
import {projectConfig} from "@/views/DragPage/plugins/utils/page-config";
import {getNodeElement} from "@/views/DragPage/plugins/utils/drawing";

export default {
  state: {
    projectData: deepCopy(projectConfig),
    parentContainerInfo: {},
    hoverChildUUID: '',
    activeElementUUID: '', // 当前选中UUID
    activeContainerIndex: '', // 当前获取焦点的容器的索引值
    middlePlaceholder: '', // 拖动左边的组件显示设置容器里面的提示“放在这里”框

    showToolsBar: true,// 左侧导航显示状态
    curAttrPanelType: '',//
  },
  mutations: {
    hideToolsBar(state) {
      state.showToolsBar = !state.showToolsBar
    },
    setAttrPanelType(state, type) {
      state.curAttrPanelType = type
    },
    // 当前选中UUID
    setActiveElementUUID(state, data) {
      state.activeElementUUID = data
    },
    setParentInfo(state, data) {
      state.parentContainerInfo = deepCopy(data || {})
    },
    setContainerIndex(state, index) {
      state.activeContainerIndex = index
    },
    // 设置当前容器提示框是否显示（主要用于左边拖拽元素，画板需要显示“放在这里”的提示框）
    setMiddlePlaceholder(state, data) {
      state.middlePlaceholder = data
    },
    // 拖拽元素插入容器
    addElementToDestination(state, obj) {
      const newNodeData = getNodeElement(obj.nodeData)
      if (newNodeData && obj.index >= 0) {
        state.projectData.elements.splice(obj.index, 0, newNodeData)
      }
    },
    // 拖拽元素到容器内
    addDropContainer(state,obj){
      const newNodeData = getNodeElement(obj.nodeData,'inner')
      if (newNodeData && obj.index >= 0) {
        state.projectData.elements[obj.index].elChild.push(newNodeData)
      }
    }
  },
}
