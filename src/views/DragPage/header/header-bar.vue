<template>
  <header>
    <div>
      <span>店铺装修</span>
    </div>
    <section>
      <el-button icon="el-icon-arrow-left" size="small">返回</el-button>
      <el-button icon="el-icon-check" type="primary" size="small">保存</el-button>
    </section>
  </header>
</template>

<script>
export default {
  name: "headerBar"
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;

  > div {
    padding-left: 10px;
  }

  > section {
    padding-right: 10px;
    margin-left: auto;
  }
}
</style>
