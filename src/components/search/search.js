import { useParams } from 'react-router-dom'
import { Box, Typography, Container } from '@mui/material'
import {useState, useEffect} from 'react'
import { ApiService } from './../../service/api.service';
import { colors } from '../../constants/colors';
import { Videos } from '../'


const Search = () => {

    const [videos, setVideos] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
                setVideos(data.items)
            } catch(err) {
                console.log(err)
            }
        }

        getData()
    }, [id])

  return (
    <Box sx={{height: '90vh'}} p={2}>
        <Container maxWidth={'90%'}>
            <Typography variant='h4' fontWeight={'bold'} mb={2}>
                Search Results for <span style={{color: colors.secondary}}>{id}</span> videos
            </Typography>
            <Videos videos={videos}/>
        </Container>
    </Box>
  )
}

export default Search