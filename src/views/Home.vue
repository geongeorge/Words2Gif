<template>
  <div class="home">
    <InputText @textChange="setInputStr"></InputText>

    <GifBox :text="inputStr"></GifBox>
  </div>
</template>

<script>
// @ is an alias to /src
import InputText from '@/components/InputText'
import GifBox from '@/components/GifBox'

export default {
  name: 'Home',
  components: {
    InputText,
    GifBox
  },
  data() {
    return {
      inputStr: ''
    }
  },
  methods: {
    setInputStr(event) {
      console.log('event')
      this.inputStr = event
    }
  }
}
</script>
