<template>
  <div>
    <input type="text" v-model="inputString" @keyup="sendEvent" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputString: ''
    }
  },
  methods: {
    sendEvent() {
      this.$emit('textChange', this.inputString)
    }
  }
}
</script>

<style></style>
