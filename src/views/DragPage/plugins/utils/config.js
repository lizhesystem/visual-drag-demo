// 基础样式
export const defaultStyle = {
  position: 'absolute',
  top: 5,
  left: 5
}

//容器
export const pContainer = {
  elName: 'p-container',
  label: '自由容器',
  icon: 'el-icon-files',
  pointList: ['b'],
  allowed: true,
  containerStyle: {
    marginBottom: 10
  },
  commonStyle: {
    height: 200,
    minHeight: 50,
    position: 'relative',
    backgroundColor: '#fff'
  },
  elChild: []
}

export const componentsList = [
  {
    title: '基础组件',
    components: [
      pContainer,
      {
        elName: 'p-text',
        label: '文本',
        icon: 'el-icon-menu',
        pointList: [],
        contenteditable: false,
        placeholder: '点击输入内容',
        commonStyle: {
          ...defaultStyle,
          padding: 8,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 17,
          color: '',
          height: 'auto',
          textAlign: 'left',
          minWidth: 35,
          width: 160
        }
      },
      {
        elName: 'p-button',
        title: '按钮',
        icon: 'el-icon-menu',
        pointList: ['lt', 'rt', 'lb', 'rb', 'l', 'r', 't', 'b'], // 控制组件拖动的方向
        contenteditable: false,
        options: {
          classList: [],
          lineHeightChange: true // 表示行高需要随着拖动的高度变化
        },
        commonStyle: {
          ...defaultStyle,
          fontSize: 15,
          lineHeight: 36,
          height: 36,
          textAlign: 'center',
          minWidth: 35,
          minHeight: 36,
          width: 80
        }
      },
    ]
  }
]
