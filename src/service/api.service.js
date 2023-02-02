import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      part: 'snippet', 
      videoId: 'M7FIvfx5J10',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '6f94a9c1b9msh3d232a7b15ef171p1d7b1ajsncef8174c6378',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const ApiService = {
    async fetching(url) {
        const res = await axios.get(`${BASE_URI}/${url}`, options);
        return res.data;
    }
  }


