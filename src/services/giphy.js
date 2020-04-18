import { GiphyFetch } from '@giphy/js-fetch-api'

const GIPHY_API_KEY = 'yzViMILvQowA33qjBigimsVS3fWrZwat'

const gf = new GiphyFetch(GIPHY_API_KEY)

export default {
  search(term, options = {}) {
    return gf.search(term, options)
  }
}
