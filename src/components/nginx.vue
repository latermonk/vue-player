<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "nginx",
  data() {
    return {
      options: [{
        value: '选项1',
        label: 'Ubuntu 18.04 x64'
      }, {
        value: '选项2',
        label: 'Ubuntu 18.04 x32'
      }, {
        value: '选项3',
        label: 'CentOS x64'
      }, {
        value: '选项4',
        label: 'CentOS x32'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>

</style>