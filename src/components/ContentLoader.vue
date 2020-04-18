<template>
  <div>
    <vue-content-loading :width="300" :height="300">
      <rect rx="4" ry="4" width="300" height="300" />
    </vue-content-loading>
  </div>
</template>

<script>
import VueContentLoading from 'vue-content-loading'

export default {
  components: {
    VueContentLoading
  }
}
</script>

<style></style>
