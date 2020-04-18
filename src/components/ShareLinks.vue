<template>
  <div class="w-1/3 text-center mx-auto">
    <a
      :href="'https://twitter.com/intent/tweet?text=' + shareText"
      class="twitter-share-button"
      data-show-count="false"
      data-size="large"
      >Tweet</a
    >
    <button
      class="border rounded px-2 hover:bg-green-200 mx-2"
      v-clipboard:copy="url"
      v-clipboard:success="onCopy"
    >
      Copy link
      <svg
        class="inline"
        id="i-link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="16"
        height="16"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    onCopy() {
      this.$toast.open({
        message: 'Copied',
        type: 'success',
        position: 'top'
      })
    }
  },
  data() {
    return {
      shareText: 'I found this cool website 😎👉 by @geongeorgek'
    }
  }
}
</script>

<style>
#twitter-widget-0 {
  display: inline-block;
}
</style>
