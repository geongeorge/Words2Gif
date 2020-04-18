<template>
  <div>
    <label>
      Enter text
    </label>
    <input
      type="text"
      v-model="inputString"
      @keyup="sendEvent"
      class="text-xl m-2 border-b-2 border-gray-600 p-1 font-extrabold focus:outline-none"
      ref="inputBox"
      :placeholder="plcehldr"
    />
    <button class="focus:outline-none" @click="sendEvent">
      <svg
        id="i-reload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="20"
        height="20"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputString: '',
      placeholderTexts: [
        'American Pie',
        'I Love You',
        'you suck',
        'I love farts',
        'I smell good',
        'Couch potato',
        '🥔 :)',
        'Go corona',
        'javascript is amazing',
        'Loosers'
      ],
      plcehldr: ''
    }
  },
  methods: {
    sendEvent() {
      console.log('chaneg')
      this.$emit('textChange', this.inputString)
    },
    randomizePlaceholder() {
      let random = this.placeholderTexts[
        Math.floor(Math.random() * this.placeholderTexts.length)
      ]
      this.plcehldr = random
    }
  },
  mounted() {
    this.randomizePlaceholder()
    setInterval(() => {
      this.randomizePlaceholder()
    }, 2000)
  },
  created() {
    //check params
    if (this.$route.query.t) {
      let txt = this.$route.query.t
      this.inputString = decodeURIComponent(txt)
      this.sendEvent()
    }
  }
}
</script>

<style></style>
