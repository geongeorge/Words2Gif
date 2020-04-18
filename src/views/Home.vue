<template>
  <div class="home">
    <InputText @textChange="setInputStr"></InputText>

    <GifBox :text="inputStr"></GifBox>

    <div class="mt-12">
      <ShareLinks :url="encodedUrl"></ShareLinks>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputText from '@/components/InputText'
import GifBox from '@/components/GifBox'
import ShareLinks from '@/components/ShareLinks'

export default {
  name: 'Home',
  components: {
    InputText,
    GifBox,
    ShareLinks
  },
  data() {
    return {
      inputStr: ''
    }
  },
  methods: {
    setInputStr(event) {
      this.inputStr = event
    }
  },
  computed: {
    encodedUrl() {
      return (
        window.location.href.split('?')[0] + '?t=' + encodeURI(this.inputStr)
      )
    }
  }
}
</script>
