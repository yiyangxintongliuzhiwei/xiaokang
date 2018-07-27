const exampleMixin = {
  created () {
    this.hello()
  },
  methods: {
    hello () {
      console.log('hello from mixin!')
    }
  }
}

export default exampleMixin
