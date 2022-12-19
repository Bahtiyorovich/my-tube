import {Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material'
import Main from '../main/Main'
import Channel from '../channel/Channel'
import Navbar from '../navbar/Navbar'
import VideoDetails from '../video/VideoDetails'
import Search from '../search/Search'
import './app.css'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/channel' element={<Channel/>}/>
          <Route path='/video' element={<VideoDetails/>}/>
          <Route path='/search' element={<Search/>}/>
      </Routes>
    </Box>
  )
}

export default App