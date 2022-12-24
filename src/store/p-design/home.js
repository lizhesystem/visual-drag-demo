export default {
  state: {
    showToolsBar: false,// 隐藏左侧导航
    curAttrPanelType: '',//
  },
  mutations: {
    hideToolsBar(state) {
      state.showToolsBar = !state.showToolsBar
    },
    setAttrPanelType(state,type){
      state.curAttrPanelType = type
    }
  },
}
