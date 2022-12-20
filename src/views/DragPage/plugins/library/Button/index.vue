<template>
  <a class="button">
    <edit-div
      v-model='btnValue'
      nowrap
      class="user-select"
      @textClick="childItem.contenteditable = true"
      @textBlur="childItem.contenteditable = false"
      :can-edit="childItem.contenteditable"
      :style="{ cursor: childItem.contenteditable ? 'text' : 'default' }"/>
  </a>
</template>

<script>
import EditDiv from "@/views/DragPage/plugins/library/components/edit-div";

export default {
  name: "p-button",
  components: {EditDiv},
  props: {
    value: {type: String, default: '按钮'},
    childItem: {
      type: Object, default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      btnValue: ''
    }
  },
  created() {
    this.tempValue = this.value
  },
  watch: {
    value(val) {
      this.tempValue = val
    },
    tempValue() {
      this.$emit('input', this.tempValue)
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #2ecc71;
  color: #fff;
  white-space: nowrap;
  display: block
}


.user-select {
  -moz-user-select: none;
  user-select: none;
}

</style>
