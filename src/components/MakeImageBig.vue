<template>
  <el-popover
    :placement="placement"
    :width="big_width"
    trigger="hover">
    <template #default>
      <img class="q-mr-md" :src="value"
           :style="{'max-height': big_width +'px','max-width':big_width+'px'}" alt="">
    </template>
    <template #reference>
      <img :src="value"
           :style="{'max-height': small_width +'px','max-width':small_width+'px'}" alt="">
    </template>
  </el-popover>
</template>

<script>

export default {
  name: 'MakeImageBig',
  props: {
    value: {
      type: String,
      default: ''
    },
    small_width: {
      type: Number,
      default: 50
    },
    big_width: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      console.log(newVal,oldVal)
      this.$forceUpdate()
    }
  }
}
</script>


<style>
</style>
