import { GiphyFetch } from '@giphy/js-fetch-api'

const GIPHY_API_KEY = 'vtn8Bbmb69gIRvBJoZdOIxZZUrxdKZwm'

const gf = new GiphyFetch(GIPHY_API_KEY)

export default {
  search(term, options = {}) {
    return gf.search(term, options)
  }
}
