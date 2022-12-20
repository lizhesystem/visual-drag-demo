import Vue from 'vue'

const components = [
  'p-Text',
  'p-Button'
]

components.forEach(key => {
  Vue.component(key, () => import(`@/views/DragPage/plugins/library/${key}`))
  Vue.component(key + 'Attr', () => import(`@/views/DragPage/plugins/library/${key}/Attr`))
})
