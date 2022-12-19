const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_PUBLIC_APP_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };



export const ApiService = {
    async fetching() {},
}