<template>
  <div class="w-48 m-1 inline-block">
    <div v-if="!isLoaded">
      <ContentLoader></ContentLoader>
    </div>
    <div v-else>
      <!-- <img src="url" crossOrigin="anonymous" /> -->
      <iframe class="w-full block" :src="url"></iframe>
    </div>
  </div>
</template>

<script>
import ContentLoader from './ContentLoader'
export default {
  components: {
    ContentLoader
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  created() {
    this.isLoaded = false
    this.fetchImage()
  },
  methods: {
    fetchImage() {
      if (this.url === '') {
        return
      }
      this.isLoaded = true
    }
  },
  watch: {
    url() {
      this.fetchImage()
    }
  }
}
</script>

<style></style>
