import {useState} from 'react'
import {Box, Stack, Container, Typography} from '@mui/material'
import {colors} from '../../constants/colors'
import Category from '../category/Category'
import Videos from '../videos/Videos'


const Main = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')

  const selectedCategoryHandler = (category) => setSelectedCategory(category)

  console.log('REACT_API_PUBLIC_KEY')

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
          <Videos/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main