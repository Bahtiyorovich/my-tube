import axios from 'axios'


const BASE_URI = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '4a244574d2msh115a246097ae241p151301jsnfd71da1e0428',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response
    },
}