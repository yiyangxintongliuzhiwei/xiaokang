<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~@/scss/reset';
@import '~@/scss/variables';
@import '~@/scss/base';

*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  color: $color-base;
  font-size: $size-base;
  font-family: PingFangSC-Light, 'Microsoft YaHei', '微软雅黑', arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
