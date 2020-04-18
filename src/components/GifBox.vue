<template>
  <div>
    <!-- <button class="border" @click="search">search</button> -->
    <!-- <pre>
        {{ gifs }}
    </pre> -->
    <div class="mx-auto w-full">
      <GifSingleWord
        v-for="(lt, key) in gifs"
        :key="key"
        :word="lt.word"
        :url="lt.url"
      ></GifSingleWord>
      <div
        v-if="gifs.length <= 0"
        class="font-extrabold text-gray-600 mt-10 border border-dashed rounded border-gray-600 w-32 h-32 mx-auto py-10"
      >
        No gifs
      </div>
    </div>
  </div>
</template>

<script>
import giphy from '@/services/giphy'
import GifSingleWord from './GifSingleWord'

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  components: {
    GifSingleWord
  },
  data() {
    return {
      gifs: [],
      timeout: null,
      loading: false
    }
  },
  methods: {
    randomInt(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    async search() {
      const options = {
        limit: 20 //fetch 20 images
      }
      this.gifs = [] //reset
      this.trimedTextArray.forEach(async word => {
        const result = await giphy.search(word, options)
        console.log(result)
        // if empty don't push
        if (!result.data || result.data.length <= 0) {
          return
        }
        let index = this.randomInt(0, result.data.length - 1)
        this.gifs.push({
          word,
          url: result.data[index].embed_url
        })
      })
    }
  },
  watch: {
    text() {
      this.gifs = this.trimedTextArray.map(word => ({
        word,
        url: ''
      }))
      this.timeout = null
      if (this.timeout !== null) {
        return
      }
      this.timeout = setTimeout(() => {
        this.search()
        this.timeout = null
      }, 1000)
    }
  },
  computed: {
    trimedTextArray() {
      return this.text.split(' ').filter(el => !['', null].includes(el.trim()))
    }
  }
}
</script>

<style></style>
