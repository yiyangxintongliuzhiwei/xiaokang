<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <h1>{{ msg | capitalize }}</h1>
    <h2></h2>
    <div>count: {{ sharedState.count }}</div>
    <Example/>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <group>
      <x-input title="title" v-model="value"></x-input>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XInput } from 'vux'
import Example from '@/components/Example'
import exampleMixin from '@/mixins/example'

export default {
  name: 'HelloWorld',
  components: {
    Example,
    Group,
    Cell,
    XInput
  },
  mixins: [exampleMixin],
  data () {
    return {
      msg: 'index',
      value: '111',
      sharedState: this.$store.state.example
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/scss/functions';

.hello {
  text-align: center;
}
h2 {
  width: unit(150px);
  height: 30px;
  margin: 0 auto;
  background-image: url('~@/assets/logo.png');
}
</style>
