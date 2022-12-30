import Vue from 'vue'

export const components = [
  'p-text',
  'p-button',
  'p-container'
]

components.forEach(key => {
  Vue.component(key, () => import(`@/views/DragPage/plugins/library/${key}`))
  Vue.component(key + 'Attr', () => import(`@/views/DragPage/plugins/library/${key}/Attr`))
})
