import {useState, useEffect} from 'react'
import {Box, Stack, Container, Typography} from '@mui/material'
import {colors} from '../../constants/colors'
import Category from '../category/Category'
import Videos from '../videos/Videos'
import { ApiService } from '../../services/api.service'

const Main = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = (category) => setSelectedCategory(category)

  useEffect(() => {
    // serverga so'rov yuborishning 1-usuli
    const getData = async() => {
      try {
        const data = await ApiService.fetching('search')
        setVideos(data)
      } catch (error){
        console.log(error.message)
      }
    }
    getData(getData)

    // serverga so'rov yuborishning 2-usuli
    //ApiService.fetching('search').then(data => setVideos(data))
  }, [])

  return (
    <Stack>
      <Category 
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}  
      />
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={'2'}>
              {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main