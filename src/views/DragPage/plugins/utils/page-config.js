// 页面配置
export const pageWh = {
  width: 1200, // 模板宽度
}

// 容器里面是模板组件，不是画板组件的基本样式（这个样式意思就是去改变原本的容器样式）（不要去改变它里面的属性）
export const moduleContainer = {
  allowed: false,
  titleBarName: '标题栏',
  pointList: [], // 控制组件拖动的方向
  // 容器画板的默认样式
  commonStyle: {
    width: pageWh.width,
    height: 'auto',
    position: 'relative',
    backgroundColor: '#fff'
  }
}

export const elementConfig = {
  animations: [], // 动画
  events: [], // 事件
  commonStyle: {}, // 样式
  propsValue: {} // 组件data默认属性参数
}

// 页面配置
export const projectConfig = {
  name: '可视化页面编辑器',
  scale: 1, // 页面的视图百分比，放大缩小
  // 页面初始样式
  commonStyle: {
    backgroundColor: '#f4f4f4'
  },
  author: '', // 创建人
  pageName: '页面名称',
  config: {}, // 页面信息配置
  width: pageWh.width,
  elements: [] // 页面容器集合
}
