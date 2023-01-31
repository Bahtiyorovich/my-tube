import {Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';
import { 
   Main,
   Channel, 
   Navbar, 
   VideoDetail,
   } from '../'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/channel/:id' element={<Channel/>}/>
        <Route path = '/videoDetail/:id' element={<VideoDetail/>}/>
      </Routes>
    </Box>
  )
}

export default App
