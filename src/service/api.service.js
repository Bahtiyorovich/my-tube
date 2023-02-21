import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const BASE_API_KEY = process.env.REACT_APP_PUBLIC_API_KEY

const options = {
    params: {
      part: 'snippet', 
      videoId: 'M7FIvfx5J10',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': BASE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const ApiService = {
    async fetching(url) {
        const res = await axios.get(`${BASE_URI}/${url}`, options);
        return res.data;
    }
  }


